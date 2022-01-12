export default function handle(req, res){
    res.status(200).json([
        {
            title: 'The Management and Administration of IsDB-BISEW',
            details: `The management and administration of the IsDB-BISEW has been vested on a Committee of Mutawallis constituted by six members of which, three members represent the Government of Bangladesh while the other three members come from the Islamic Development Bank.The office of IsDB-BISEW is responsible for management and administration, planning and implementation of the projects and also for operation and management of wakf properties and assets.`,
        },
        {
            title: 'Formation of Committee of Mutawallis',
            details: `The Committee of Mutawallis shall consist of a Chairman, a Vice-Chairman and four other members. The Chairman and Vice-Chairman shall be nominated by the Bank and the Government by rotation so that if in any particular term the Chairman is nominated by the Bank, the Vice-Chairman shall, for that term, be nominated by the Government and if for any particular term the Chairman is nominated by the Government, the Vice-Chairman shall, for that term, be nominated by the Bank. Of the four other members, two will be nominated by the Bank and the other two will be nominated by the Government. The tenure of the Committee is for 3 (three) years.`,
        },
        {
            title: 'The objectives and purposes of IsDB-BISEW',
            details: `<p>IsDB-BISEW undertakes funding, formulating and implementing of projects in the areas of education, human resource development and institutional strengthening.</p><p>The intent is to gradually transform the large population into productive workforce by strengthening their technical capability to use existing and emerging technologies resulting in sustainable economic growth and equality. </p>`,
        },
        {
            title: 'Resources of IsDB-BISEW',
            details: `<p>IsDB-BISEW generates its revenue by renting out commercial spaces of IDB Bhaban, a 20-storied building and a 4-storied shopping complex.</p><p>IDB Bhaban has become the “land mark” of Dhaka city because of the best possible tenants under one roof and establishing one of a kind of computer market in the shopping complex. Highest standard of operation and management of the complex in order to retain international, multinational organizations to ensure uninterrupted flow of rental income so to maintain projects operation pursuing IsDB-BISEW’s objectives.</p>`,
        }
    ])
}