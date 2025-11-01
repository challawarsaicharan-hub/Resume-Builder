function generateResume() {
    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Set the values in the resume section
    document.getElementById('r-name').innerText = name;
    document.getElementById('r-email').innerText = email;
    document.getElementById('r-phone').innerText = phone;
    
    // Skills
    const skillList = document.getElementById('r-skills');
    skillList.innerHTML = "";
    skills.forEach(skill => {
        let li = document.createElement('li');
        li.textContent = skill.trim();
        skillList.appendChild(li);
    });

    document.getElementById('r-experience').innerText = experience;
    document.getElementById('r-education').innerText = education;
}