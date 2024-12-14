import { Box } from "@mui/material";
import { Typography } from "antd";
import ButtonFilter from "../../reusable/ButtonFilter";
import DividerComp from "../../reusable/DividerComp";

import CourseCard from "../../reusable/CourseCard";
import useFilterTopicProps from "./useFilterTopicProps";
import { filterTopicStyle } from "../../styles/ComponentsStyles/filterTopicStyles";

export default function FilterTopicProgress() {
 const {activeTopics, setActiveTopics, activeProgresses, setActiveProgresses, activeStatuses, setActiveStatuses, handleFilterChange,certificates, courses}=useFilterTopicProps()
console.log(courses,"certificates");

  return (
    <Box>
      <Box sx={{...filterTopicStyle.container}}>
        {/* Filter By Topic Section */}
        <Box>
          <Typography style={{...filterTopicStyle.typography}}>
              Filter By Certificate
          </Typography>
          {certificates.map((topic) => (
            <ButtonFilter
              key={topic.CertificateShortName.toLowerCase()}
              isActive={activeTopics.includes(topic.CertificateShortName)}
              data={{
                name: topic.CertificateShortName,
                label: topic.CertificateShortName,
                key: topic.CertificateShortName.toLowerCase(),
                onChange: () => handleFilterChange(activeTopics, setActiveTopics, topic.CertificateShortName),
              }}
            />
          ))}
        </Box>

        {/* Filter By Progress Section */}
        <Box sx={{...filterTopicStyle.progressSectoin}}>
          <Box>
            <Typography style={{...filterTopicStyle.typography}}>
              Filter By Progress
            </Typography>
            {["Any Progress", "Started", "In Progress", "Completed"].map((progress) => (
              <ButtonFilter
                key={progress}
                isActive={activeProgresses.includes(progress)}
                data={{
                  name: progress,
                  label: progress,
                  key: progress.toLowerCase(),
                  onChange: () => handleFilterChange(activeProgresses, setActiveProgresses, progress),
                }}
              />
            ))}
          </Box>

          {/* Filter By Status Section */}
          <Box>
            <Typography style={{...filterTopicStyle.typography}}>
              Filter By Status
            </Typography>
            {["Any Status", "Active", "Inactive"].map((status) => (
              <ButtonFilter
                key={status}
                isActive={activeStatuses.includes(status)}
                data={{
                  name: status,
                  label: status,
                  key: status.toLowerCase(),
                  onChange: () => handleFilterChange(activeStatuses, setActiveStatuses, status),
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <DividerComp />
      <Box sx={{...filterTopicStyle.continerCourses}}>
        {
          courses.map((course)=>{
            return <CourseCard data={{
              status: course.Status,
              courseName: course.CourseName,
              content: course.CourseShortDesc,
              iconUrl: course.IconUrl,
              fkCertificateId: course.FkCertificateId
            }}/>
          })
        }
      </Box>
     
    </Box>
  );
}
