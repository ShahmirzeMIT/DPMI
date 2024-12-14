import React, { useEffect, useState } from 'react'

export default function useFilterTopicProps() {
    const [activeTopics, setActiveTopics] = useState<string[]>([]);
    const [activeProgresses, setActiveProgresses] = useState<string[]>([]);
    const [activeStatuses, setActiveStatuses] = useState<string[]>([]);
    const [ courses, setCourses] = useState<any[]>([]);
    const [certificates, setCertificates] = useState<any[]>([]);


    /// data fetching
    const getCourses = async () => {
      fetch('/certificate.json')
            .then((response) => response.json())
            .then((data) => {
                setCertificates([{id:0,
                  CertificateShortName:"Any Certificate",
                  CertificateId:'1000',
                  CertificateLongDesc:"",
                  CertificateLongName:"Any Certificate",
                  CertificateShortDesc:"",
                  OrderNo:'0',
                  Status: "A"
                },...data]); 
            })
            .catch((error) => console.error("Error loading JSON:", error));

      fetch('/courses.json')
            .then((response) => response.json())
            .then((data) => {
                setCourses(data); // Save the fetched data in state
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }

    useEffect(() => {
      getCourses();
    }, []);
  
    

    // filter part 
    const handleFilterChange = (group: string[], setGroup: React.Dispatch<React.SetStateAction<string[]>>, selected: string) => {
      if (selected.startsWith("Any")) {
    
        setGroup([selected]);
      } else {
        const newGroup = group.includes(selected)
          ? group.filter((item) => item !== selected) // Deselect
          : [...group.filter((item) => !item.startsWith("Any")), selected]; // Add selected
        setGroup(newGroup);
      }
    };
  return {activeTopics, setActiveTopics, activeProgresses, setActiveProgresses, activeStatuses, setActiveStatuses, handleFilterChange, certificates, courses}
}
