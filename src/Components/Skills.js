import React from 'react';
import SkillBar from 'react-skillbars';


const Skills = () => {
    const skills = [
        { type: 'HTML', level: 90 },
        { type: 'CSS', level: 70 },
        { type: 'Javascript', level: 50 },
        { type: 'Reactjs', level: 50 },
        { type: 'Bootstrap', level: 65 },
        { type: 'MySQL', level: 20 }
      ];
      const colors = {
        bar: "#3498db",
        title: {
          text: "#fff",
          background: "#2980b9"
        }
      }; 
    return (
        <div id='skills'>
            <div className="container" style={{paddingTop: "5rem"}} >
                <div className="skills-head text-center mb-5">
                    <h2 className='font-poppins mb-3'>My Skills</h2>
                    <span className='bafter bf-skills'></span>
                </div>
                <div className="skills-content">
                    <div className="row">
                        <div className="skills-left col-sm-6 mb-4">
                            <h4>My creative skills and experiences.</h4>
                            <p className='text-justify font-poppins mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quis quia iure esse unde aliquam dolor molestiae voluptate nulla culpa voluptatem laboriosam praesentium, quo, ea totam libero nesciunt, tenetur autem soluta in ducimus. Ullam, hic quibusdam laudantium omnis, incidunt autem harum laboriosam sed enim nam exercitationem adipisci modi, eaque neque? Accusamus voluptatum doloribus quos esse culpa eveniet fugit itaque adipisci?</p>
                            <a href="" className='btn-hire-me'>Read More</a>
                        </div>
                        <div className="skillbar-part col-sm-6">
                        <SkillBar skills={skills} colors={colors} height={22} animationDelay={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
