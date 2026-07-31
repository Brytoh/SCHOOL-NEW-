// ===============================
// HOME PAGE
// ===============================

async function loadHome(){

    loadSettings();

    loadCourses();

    loadNews();

    loadEvents();

}

loadHome();


// ===============================
// SETTINGS
// ===============================

async function loadSettings(){

    const settings = await API.get("Settings");

    const config = {};

    settings.forEach(item=>{

        config[item.KEY]=item.VALUE;

    });

    if(document.getElementById("collegeName"))
        document.getElementById("collegeName").textContent=config.CollegeName;

    if(document.getElementById("heroTitle"))
        document.getElementById("heroTitle").textContent=config.HeroTitle;

    if(document.getElementById("heroText"))
        document.getElementById("heroText").textContent=config.HeroText;

    if(document.getElementById("footerCollege"))
        document.getElementById("footerCollege").textContent=config.CollegeName;

    if(document.getElementById("footerMotto"))
        document.getElementById("footerMotto").textContent=config.Motto;

}


// ===============================
// COURSES
// ===============================

async function loadCourses(){

    const courses=await API.get("Courses");

    const container=document.getElementById("coursesContainer");

    if(!container) return;

    container.innerHTML="";

    courses.slice(0,3).forEach(course=>{

        container.innerHTML+=`

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="card shadow h-100">

                <div class="card-body">

                    <h4>${course.COURSES}</h4>

                    <p><strong>Department:</strong> ${course.DEPARTMENT}</p>

                    <p><strong>Duration:</strong> ${course.DURATION}</p>

                    <p><strong>Level:</strong> ${course.LEVEL}</p>

                </div>

            </div>

        </div>

        `;

    });

}


// ===============================
// NEWS
// ===============================

async function loadNews(){

    const news=await API.get("News");

    const container=document.getElementById("newsContainer");

    if(!container) return;

    container.innerHTML="";

    news.slice(0,3).forEach(item=>{

        container.innerHTML+=`

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="card shadow h-100">

                <img src="${item.IMAGE}" class="card-img-top" style="height:220px;object-fit:cover;">

                <div class="card-body">

                    <small class="text-muted">${item.DATE}</small>

                    <h4 class="mt-2">${item.TITLE}</h4>

                    <p>${item.DESCRIPTION}</p>

                </div>

            </div>

        </div>

        `;

    });

}


// ===============================
// EVENTS
// ===============================

async function loadEvents(){

    const events=await API.get("Events");

    const container=document.getElementById("eventsContainer");

    if(!container) return;

    container.innerHTML="";

    events.slice(0,3).forEach(event=>{

        container.innerHTML+=`

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="card shadow h-100">

                <div class="card-body">

                    <span class="badge bg-primary mb-3">${event.DATE}</span>

                    <h4>${event.TITLE}</h4>

                    <p>${event.DESCRIPTION}</p>

                    <p><strong>Venue:</strong> ${event.VENUE}</p>

                    <p><strong>Time:</strong> ${event.TIME}</p>

                </div>

            </div>

        </div>

        `;

    });

}