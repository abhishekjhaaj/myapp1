import React, { useEffect, useState } from 'react';
import SingleCourse from './SingleCourse';

function AllCourses() {
    useEffect(()=>{
        //alert("testing");
    },[])
    const [ courses, setCourse ] = useState(
        [
            { title: "Java Course", text: "This is Java" }, { title: "Java Course2", text: "This is Java8" },
            { title: "Spring Course", text: "This is Spring Java" }, { title: "Java Jpa Course", text: "This is Java Spring Jpa" },
        ]
    );
    console.log(courses);
    return (
        <>
            <h1>All Courses</h1>
            {/* {courses.length > 0 ? courses.map((item) => { return (<SingleCourse course={item} />) }) : "No Course Found"
            } */}
            {courses.length > 0 ? courses.map((item) => <SingleCourse course={item} />) : "No Course Found"
            }
        </>
    );
}

export default AllCourses;