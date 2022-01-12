export default function handle(req, res){
    let data = [
        "Bangla",
        "Mathematics",
        "English",
        "Physics",
        "Chemistry"
    ]
    res.status(200).json(data)
}