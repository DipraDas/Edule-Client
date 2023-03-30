import { useEffect, useState } from "react"

const useTutor = email => {
    const [isTutor, setIsTutor] = useState(false);
    const [isTutorLoading, setIsTutorLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/tutor/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsTutor(data.isTutor);
                    setIsTutorLoading(false);
                })
        }
    }, [email])
    return [isTutor, isTutorLoading]
}

export default useTutor;