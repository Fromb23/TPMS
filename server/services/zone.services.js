import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const MAX_SCHOOLS = 30;

export const assignSchoolsToZone = async (zone) => {
  const unassignedSchools = await prisma.school.findMany({
    where: { zoneId: null },
  });

  if (unassignedSchools.length === 0) {
    console.log("No unassigned schools found.");
    return;
  }

  // Ensure zone.constituencies is an array
  if (!Array.isArray(zone.constituencies)) {
    console.error("Zone constituencies must be an array.");
    return;
  }

  const filteredSchools = unassignedSchools.filter((school) => {
    return (
      school.county === zone.county &&
      school.constituency &&
      zone.constituencies.includes(school.constituency)
    );
  });

  if (filteredSchools.length === 0) {
    console.log("No suitable schools found for the zone.");
    return;
  }

  const limitedSchools = filteredSchools.slice(0, MAX_SCHOOLS);

  await Promise.all(
    limitedSchools.map((school) =>
      prisma.school.update({
        where: { id: school.id },
        data: { zoneId: zone.id },
      })
    )
  );

  console.log(`Assigned ${limitedSchools.length} schools to zone ${zone.id}.`);
};


// NOTE: For now, zones are created purely from data — no geolocation used.
// Future Enhancement: Consider using geocoding to dynamically assign proximity-based zones.

// School selection logic:
// - Only schools with approved: true
// - Must have at least one student assigned

// Future case to handle (not implemented):
// - If a student selects a school in another county, they can be assigned to a nearby zone.
// - This will require distance matrix or polygon GIS data.

// Zone Formation Logic:
// - A zone is formed only if there's at least one active student in a school.
// - Zones are deleted once the TP cycle ends.
