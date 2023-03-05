export const ContactFormResultSubmittedText: React.FC<{
	submittedText?: string;
}> = ({ submittedText }) => (
	<>
		{submittedText && (
			<div className='text-center'>
				<p className='mt-3'>
					<strong>Your message:</strong>
				</p>
				<p>{submittedText}</p>
			</div>
		)}
	</>
);
