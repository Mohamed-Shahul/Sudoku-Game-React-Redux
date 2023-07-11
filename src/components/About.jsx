import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <>
    <Header/>
    <div className='aboutDiv'>
    <table>
          <tbody>
            <tr>
              <td>Created By</td>
              <td>Mohamed Shahul Hameed</td>
            </tr>
            <tr>
              <td>Education</td>
              <td>BSC IT</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>Html, Css, JavaScript, React js, Bootstrap</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>08/07/2002</td>
            </tr>
          </tbody>
        </table>
    </div>
    </>
    
  )
}

export default About
