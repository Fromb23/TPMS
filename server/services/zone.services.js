import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const assignSchoolsToZone = async (zone) => {
    const MAX_SCHOOLS = 30;

    const allUnassignedSchools = await prisma.school.findMany({
        where: { zoneId: null },
    });

    let matchedSchools = allUnassignedSchools.filter(school =>
        zone.constituencies.includes(school.constituency)
    );

    if (matchedSchools.length === 0) {
        matchedSchools = allUnassignedSchools.filter(school =>
            school.county === zone.county
        );
    }

    const toAssign = matchedSchools.slice(0, MAX_SCHOOLS);

    for (const school of toAssign) {
        await prisma.school.update({
            where: { id: school.id },
            data: { zoneId: zone.id },
        });
    }

    console.log(`Assigned ${toAssign.length} schools to zone ${zone.name}`);
};