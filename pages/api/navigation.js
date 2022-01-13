import {FaHome} from "react-icons/fa";

export default function handler(req, res){
    res.status(200).json(
        [
            { name: "Home",
                path: "/"
            },
            {
                name: "FAQ",
                path: "/faq",
            },
            {
                name: "Course Outcome",
                path: "/course_outcome",
            },
            {
                name: "Course Details",
                path: "/course_outcome",
            }
        ]
    )
}