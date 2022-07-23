import React from 'react';
import fafsa from './fafsa-rend.png';

function Info() {
  return (
   <div>
    <h1>Fafsa</h1>
    <p>Financial aid helps students and their families pay for college. It can cover a range of educational expenses, like tuition and fees, room and board, books and supplies, and transportation.</p>
    <p>The Free Application for Federal Student Aid (FAFSA) must be completed to apply for federal and state financial aid. Many colleges and universities, especially public institutions, also require the FAFSA. The FAFSA must be submitted every year to obtain financial aid for college.</p>
    <img class="fafas-pg" src={fafsa} alt={"render aid"}/>
    <p>Before each year of college, apply for federal grants, work-study, and loans with the Free Application for Federal Student Aid (FAFSA®) form. Your college uses your FAFSA data to determine your federal aid eligibility. Many states and colleges use FAFSA data to award their own aid.</p>
    <h2>Obtaining a FAFSA</h2>
    <p>The FAFSA is available in several formats, including online, PDF and paper versions. The best option is to complete the web-based version of the FAFSA known as studentaid.gov.</p>
    <p>All eligible students should fill out the form to create a FSA ID and follow all instructions. FAFSA on the Web benefits:</p>
    <p>
        – Get Student Aid Report (SAR) sooner than with the paper or PDF forms. Your FAFSA will be more accurate, since the FAFSA on the Web has built-in edit checks to catch simple errors and you avoid errors introduced by the OCR process.
        <br></br>
        – Save the federal government money by reducing their processing costs. The online FAFSA allows you to list up to ten colleges, while the paper FAFSA has space only for four colleges.
        <br></br>
        – Use the IRS Data Retrieval Tool to pre-fill the answers to some questions on the FAFSA by transferring data from your federal income tax returns. This will save time and may reduce the likelihood that your FAFSA will be selected for verification. 
        <br></br>
        – Obtain the PDF format FAFSA in both English and Spanish. Students may also obtain up to three paper copies by calling 1-800-4-FED-AID (1-800-433-3242) or 1-391-337-5665. (Hearing impaired individuals should call the TTY number 1-800-730-8913.) Paper FAFSAs can be ordered.
        <br></br>
    </p>
    <h2>Understanding Expected Family Contribution (EFC)</h2>
    <p>
        The EFC is the amount of money your family will be expected to contribute to your education. 
        The EFC is subtracted from the school’s Cost of Attendance (COA), also known as the “student budget”, 
        to arrive at your financial need: Financial Need = COA – EFC. The student budget includes tuition, fees, 
        room and board, books and supplies, travel, and personal and incidental expenses.
    </p>
    <p>The lower your EFC, the more financial aid you will get. The school will try to meet this need through a financial aid “package” that combines aid from federal, state, school, and private sources with loans and student employment.</p>
    <p>You may find your EFC figure to be painfully high. This often occurs because the need analysis formulas are heavily weighted toward current income. In addition, the formulas consider your income and assets without taking many common forms of consumer debt into account, such as credit card balances and auto loans. Finally, student income and assets can add significantly to the EFC figure.</p>
    <p>Carefully review all of the information on the SAR to make sure it is correct. If there are any errors, call the school’s financial aid administrator to ask how you should make corrections. The item numbers printed on the SAR correspond with the question numbers on the FAFSA form. SAR comments and codes are outlined in the 2021–2022 SAR Comment Codes and Text Guide from the Department of Education.</p>
    <p>The federal processor will send a copy of your SAR to each of the schools you listed on the FAFSA. If you need additional copies of the SAR, call the federal processor and ask for a duplicate SAR. Keep your copy of the SAR in the same folder that contains your copy of the FAFSA and the records you used to complete the FAFSA.</p>
    <p>Fafsa provides a few tips on ways you can reduce your EFC and thereby maximize your eligibility for financial aid.</p>
    <h2>Helpful Fafsa Walkthrough Videos</h2>
    <div class="video-position">
        <iframe class="video1" width="560" height="315" src="https://www.youtube.com/embed/dzI8DhgHRzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-VSehloUF7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>
   </div>
  );
}

export default Info;