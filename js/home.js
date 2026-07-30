// ===============================
// HOME PAGE
// ===============================

async function loadHome(){

    loadSettings();

    loadCourses();

}

loadHome();


// ===============================
// SETTINGS
// ===============================

async function loadSettings(){

    const settings = await API.get("Settings");

    const config = {};

    settings.forEach(item=>{

        config[item.KEY] = item.VALUE;

    });

    if(document.getElementById("collegeName"))
        document.getElementById("collegeName").textContent = config.CollegeName;

    if(document.getElementById("heroTitle"))
        document.getElementById("heroTitle").textContent = config.HeroTitle;

    if(document.getElementById("heroText"))
        document.getElementById("heroText").textContent = config.HeroText;

    if(document.getElementById("footerCollege"))
        document.getElementById("footerCollege").textContent = config.CollegeName;

    if(document.getElementById("footerMotto"))
        document.getElementById("footerMotto").textContent = config.Motto;

}



// ===============================
// COURSES
// ===============================

async function loadCourses(){

    const courses = await API.get("Courses");

    const container = document.getElementById("coursesContainer");

    if(!container) return;

    container.innerHTML="";

    courses.slice(0,3).forEach(course=>{

        container.innerHTML += `

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="card shadow h-100">

                <div class="card-body">

                    <h4>${course.COURSES}</h4>

                    <p>

                        <strong>Department:</strong>

                        ${course.DEPARTMENT}

                    </p>

                    <p>

                        <strong>Duration:</strong>

                        ${course.DURATION}

                    </p>
                    <p>

                        <strong>Level:</strong>

                        ${course.LEVEL}

                    </p>

                </div>

            </div>

        </div>

        `;

    });

}