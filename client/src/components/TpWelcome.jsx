import { FiAlertCircle, FiCheckCircle, FiInfo, FiArrowRight } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import apiClient from "@/api/api";
import Button from "@/components/ui/Button/Button";

const TpWelcome = () => {
	const navigate = useNavigate();

	const faqs = [
		{
			question: "What documents do I need to submit initially?",
			answer: "You need to submit your school documents for verification before starting teaching practice."
		},
		{
			question: "How many supervisions will I have?",
			answer: "You will have at least 3 supervisions during your teaching practice period."
		},
		{
			question: "Can I edit my submitted lesson plans?",
			answer: "Yes, you can edit your lesson plans but you need to submit at least 3 per week."
		},
		{
			question: "What happens if my documents are rejected?",
			answer: "You'll be notified and given a chance to resubmit the required documents."
		},
		{
			question: "When will I receive my TP grades?",
			answer: "After completing all phases, grades will be available in your student portal."
		}
	];


	const queryClient = useQueryClient();

	const Mutation = useMutation({
		mutationFn: async () => {
			try {
				const token = localStorage.getItem("token");
				const res = await apiClient.post("/students/confirmWelcome", {},
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					})
				return res.data;
			} catch (error) {
				console.log("Error occurred while welcoming the student teacher", error);
				throw new Error("Failed to welcome student teacher")
			}
		},
		onSuccess: (data) => {
			console.log(data);
			if (data?.success || data?.message === "Welcome confirmed successfully") {
				queryClient.invalidateQueries(['studentSchoolData']);
				navigate("/student-dashboard");
			} else {
				alert("Unexpected response. Please try again or contact support.");
			}
		},
		onError: (error) => {

		},
	});
	const handleGetStarted = () => {
		Mutation.mutate();
	}

	return (
		<Layout
			title="Welcome to Student Teacher Dashboard"
			role="student"
			breadcrumbs={[
				{ label: 'Home', href: '/tp/welcome' },
				{ label: 'Welcome to TPMS', href: '/tp/welcome' }
			]}
		>
			<div className="bg-white p-6 rounded-lg shadow-md mb-6">
				<h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome to Your Teaching Practice Journey!</h2>

				<div className="bg-blue-50 p-4 rounded-lg mb-6">
					<p className="text-blue-800">
						Congratulations on reaching this important milestone in your teaching career!
						This portal will guide you through your Teaching Practice (TP) period.
						Don't worry - we're here to support you every step of the way.
					</p>
				</div>

				<div className="mb-6">
					<h3 className="font-semibold text-lg flex items-center mb-2 text-green-700">
						<FiCheckCircle className="mr-2" />
						Teaching Practice Overview
					</h3>
					<p className="mb-4">
						Your Teaching Practice will take approximately {/* insert duration */} weeks to complete.
						During this period, you'll go through 6 important phases that will prepare you
						for your future teaching career.
					</p>

					<div className="bg-gray-50 p-4 rounded-lg mb-4">
						<h4 className="font-medium mb-2">The 6 Phases of Teaching Practice:</h4>
						<ol className="list-decimal pl-5 space-y-2">
							<li>
								<span className="font-medium">Document Submission:</span> Submit your school documents for verification.
							</li>
							<li>
								<span className="font-medium">Verification:</span> Wait for your documents to be verified. If rejected, you'll resubmit.
							</li>
							<li>
								<span className="font-medium">Active TP:</span> Submit required documents (scheme of work, lesson plans, timetable, record of work).
							</li>
							<li>
								<span className="font-medium">Supervision:</span> You'll be supervised at least 3 times (you'll receive notifications).
							</li>
							<li>
								<span className="font-medium">Final Submission:</span> Submit final documents for verification.
							</li>
							<li>
								<span className="font-medium">Completion:</span> Await grading - congratulations, you've successfully completed TP!
							</li>
						</ol>
					</div>
				</div>

				<div className="mb-6">
					<h3 className="font-semibold text-lg flex items-center mb-2">
						<FiInfo className="mr-2 text-blue-600" />
						Important Instructions
					</h3>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">•</span>
							<span>Submit your scheme of work once (but it can be edited later if needed).</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">•</span>
							<span>Submit at least 3 lesson plans per week (you can submit new ones after 24 hours).</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">•</span>
							<span>Submit your timetable and record of work once.</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">•</span>
							<span>When supervision is initiated, you'll receive an email with supervisor details.</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">•</span>
							<span>After each supervision, confirm it by clicking the supervision button (this can only be done once).</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-600 mr-2">•</span>
							<span>After final submission and verification, you'll move to completion phase.</span>
						</li>
					</ul>
				</div>

				<div className="bg-green-50 p-4 rounded-lg mb-6">
					<h3 className="font-semibold text-lg flex items-center mb-2 text-green-700">
						<FiCheckCircle className="mr-2" />
						Success Assurance
					</h3>
					<p>
						We want to assure you that once you successfully complete all phases of your Teaching Practice,
						you are guaranteed to receive your marks. There will be no missing marks for TP grades
						if you follow all instructions and complete all requirements.
					</p>
				</div>

				<div className="bg-red-50 p-4 rounded-lg mb-6">
					<h3 className="font-semibold text-lg flex items-center mb-2 text-red-600">
						<FiAlertCircle className="mr-2" />
						Important Warning
					</h3>
					<p>
						If your Teaching Practice period is terminated due to misconduct, you will be immediately
						blocked from accessing the TP portal. In such cases, you must consult the Teaching Practice
						department for further guidance.
					</p>
				</div>

				<div className="mb-6">
					<h3 className="font-semibold text-lg mb-2">Encouragement Message</h3>
					<div className="bg-yellow-50 p-4 rounded-lg">
						<p className="italic">
							"Remember that every great teacher started exactly where you are now. This teaching practice
							is your opportunity to grow, learn, and develop your unique teaching style. There will be
							challenges, but each one is a chance to become better. Believe in yourself - you've got this!
							The education world is waiting for the unique gifts only you can bring to the classroom."
						</p>
					</div>
				</div>

				<div className="mb-6">
					<h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div key={index} className="border-b pb-3">
								<h4 className="font-medium text-blue-800">{faq.question}</h4>
								<p className="text-gray-700">{faq.answer}</p>
							</div>
						))}
					</div>
				</div>

				<Button
				  fullWidth={false}
				  onClick={handleGetStarted}
				  variant="primary"
				>
					Get Started <FiArrowRight className="ml-2" />
				</Button>
			</div>
		</Layout>
	);
};

export default TpWelcome;