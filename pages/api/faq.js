export default function handle(req, res){
    res.status(200).json([
        {
            title: 'What is IsDB-BISEW?',
            details: `Islamic Development Bank-Bangladesh Islamic Solidarity Educational Wakf (IsDB-BISEW) was established following an agreement between the Islamic Development Bank, Jeddah, Saudi Arabia, and the Government of Bangladesh. IsDB-BISEW undertakes funding and implementing of projects in the areas of education, human resource development and institutional strengthening.`
        },
        {
            title: 'What is IsDB-BISEW IT Scholarship Programme?',
            details: `It is a technology skills development project under which the scholarship winners are provided with training of various duration on IT disciplines leading to a certificate or professional diploma. Graduates of the past Rounds of the scholarship programme are employed as IT professionals in various organizations at home and abroad.`
        },
        {
            title: 'What benefit would a candidate get from this project?',
            details: `The selected candidates will get an opportunity to undergo training by participating in a Certificate or a Diploma level course at one of the premier training institute in Dhaka or Chittagong. In financial terms, these courses are worth approximately Tk. 180,000 for training only. An additional sum of around Tk. 20,000 is spent for vendor certification for each trainee, where applicable.`
        },
        {
            title: 'What would the scholarship cover?',
            details: `The scholarship would cover the entire tuition fees (including textbooks) for each course offered.  It also covers the Vendor Certification examination fee that a candidate needs to pass in order to successfully complete the course.  The scholarship does not cover the cost to be incurred by the candidate for food and accommodation during the training.`
        },
        {
            title: 'How many times does the student intake take place?',
            details: `The student intake would take place 4 times in a project year. Candidates may apply in multiple intakes if unsuccessful in earlier attempts.`
        },
        {
            title: 'Who can apply for the scholarships?',
            details: `This scholarship is only for Muslim youths who have already passed Bachelor’s (Pass Course/Honours)/Fazil or Master’s/Kamil degree examination or a 4-year diploma in Civil/Computer/Telecommunication/Electronics Engineering..`
        },
        {
            title: 'Do candidates need to have prior computing knowledge for applying for the scholarships?',
            details: `Candidates not having any prior knowledge of computing can apply for the Scholarship.`
        },
        {
            title: 'What are the steps involved in the candidate selection process?',
            details: `<p>Following are the steps involved in the candidate selection process under IsDB-BISEW scholarship program:
                        <ul className="list-disc">
                            <li>Apply online by visiting the web link apply.IsDB-BISEW.info</li>
                            <li>Carefully read the given instructions before filling up the form. Keep your academic certificates/mark-sheets and your National ID at hand as you will need these to fill up the form</li>
                            <li>Candidate has to pay 100 Taka by bKash as application fee on mentioned bKash account number. Enter the required information in the form with bKash transaction ID and click on the Submit button</li>
                            <li>Print out two copies of the Admit Card shown on the screen and bring both copies to the exam centre when you appear for the Aptitude Test</li>
                            <li>If you enter all required information correctly and you are eligible for the scholarship then you will be shortlisted to appear in the Interview/Aptitude Test or any other screening process as required by the Programme Authority</li>
                            <li>You shall be selected for the scholarship if you pass all the screening processes</li>
                        </ul></p>`
        }
    ])
}