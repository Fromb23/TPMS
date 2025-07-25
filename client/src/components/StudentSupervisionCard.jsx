import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { confirmStudentSupervision } from "@/services/supervisionServices";
import Button from "@/components/ui/Button/Button";

const StudentSupervisionCard = ({ schedule }) => {
  const [confirmed, setConfirmed] = useState(schedule.isSupervised);
  const supervisionId = schedule.id;

  const Mutation = useMutation({
    mutationFn: confirmStudentSupervision,
    onSuccess: (data) => {
      console.log("Supervision confirmation successful:", data);
      setConfirmed(!confirmed);
    },
    onError: (error) => {
      console.error("Error confirming supervision:", error);
    }
  });

  const handleConfirm = () => {
    Mutation.mutate({
      supervisionId: supervisionId,
      isSupervised: !confirmed, supervisionCount: schedule.supervisionCount
    });

  };

  return (
    <div className="text-sm text-gray-800 flex items-center gap-3 mt-4">
      <span>
        Confirm supervision by <span className="font-semibold text-purple-700">{schedule?.lecturer?.user?.fullName}</span>:
      </span>

      <Button
        onClick={handleConfirm}
        disabled={confirmed}
        fullWidth={false}
        variant={confirmed ? 'outline' : 'primary'}
        className={`w-10 h-5 rounded-full transition duration-300 relative ${confirmed ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
          }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${confirmed ? "translate-x-5" : ""
            }`}
        />
      </Button>

      <span className={`text-xs ${confirmed ? "text-green-600" : "text-gray-500"}`}>
        {confirmed ? "Confirmed" : "Click to confirm"}
      </span>
    </div>
  );
}

export default StudentSupervisionCard;