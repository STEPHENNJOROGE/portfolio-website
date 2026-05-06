        /*typing animation*/
        var typed = new Typed(".typing",{
            strings:["","Content Creator","Web Developer", "Graphic Designer", "Social Media Manager", "Customer Service Assistant", "IT Support", "Networking Assistant"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })
        
                /*aside and section toggling*/
            const nav = document.querySelector(".nav"),
            navlist = nav.querySelectorAll("li"),
            totalNavList = navlist.length,
            allsection = document.querySelectorAll(".section"),
            totalsection = allsection.length;
            
            // Function to remove back-section class from all sections
            function removeBackSection() {
                for (let i = 0; i < totalsection; i++) {
                    allsection[i].classList.remove("back-section");
                }
            }
        
            // Function to add back-section class to a specific section
            function addBackSection(index) {
                if (index >= 0 && index < totalsection) {
                    allsection[index].classList.add("back-section");
                }
            }
        
            // Function to remove active class from all navigation links
            function removeActiveClassFromNav() {
                for (let i = 0; i < totalNavList; i++) {
                    navlist[i].querySelector("a").classList.remove("active");
                }
            }
        
            // Function to remove active class from all sections
            function removeActiveClassFromSections() {
                for (let i = 0; i < totalsection; i++) {
                    allsection[i].classList.remove("active");
                }
            }
        
            // Event listeners for navigation list items
            for (let i = 0; i < totalNavList; i++) {
                const a = navlist[i].querySelector("a");
                a.addEventListener("click", function () {
                    // Step 1: Find the currently active navigation link and its corresponding section
                    let currentActiveNavIndex = -1;
                    for (let j = 0; j < totalNavList; j++) {
                        if(navlist[j].querySelector("a").classList.contains("active")) {
                            currentActiveNavIndex = j;
                            break;
                        }
                    }
        
                    // Step 2: If there was a previously active section, add the back-section class to it
                    if (currentActiveNavIndex !== -1) {
                        addBackSection(currentActiveNavIndex);
                    }
        
                    // Step 3: Remove active class from all navigation links and sections
                    removeActiveClassFromNav();
                    removeActiveClassFromSections();
        
                    // Step 4: Activate the clicked navigation link
                    this.classList.add("active");
        
                    // Step 5: Show the corresponding section
                    const targetId = this.getAttribute("href").split("#")[1];
                    document.querySelector("#" + targetId).classList.add("active");
        
                    // Step 6: Handle aside toggling for smaller screens
                    if(window.innerWidth < 1200) {
                        asideSectionTogglerBtn();
                    }
                });
            }
        
            // Event listener for \'hire-me\' button
            document.querySelector(".hire-me").addEventListener("click", function() {
                const targetSectionId = this.getAttribute("href") ? this.getAttribute("href").split("#")[1] : "contact";
                const targetNavLink = document.querySelector(`.nav li a[href="#${targetSectionId}"]`);
        
                // Find the currently active navigation link and its corresponding section
                let currentActiveNavIndex = -1;
                for (let j = 0; j < totalNavList; j++) {
                    if(navlist[j].querySelector("a").classList.contains("active")) {
                        currentActiveNavIndex = j;
                        break;
                    }
                }
        
                // If there was a previously active section, add the back-section class to it
                if (currentActiveNavIndex !== -1) {
                    addBackSection(currentActiveNavIndex);
                }
        
                if (targetNavLink) {
                    // Simulate a click on the corresponding navigation link
                    targetNavLink.click();
                } else {
                    // Fallback if no corresponding nav link is found
                    // Remove active class from all navigation links and sections
                    removeActiveClassFromNav();
                    removeActiveClassFromSections();
        
                    // Activate the target section
                    document.querySelector("#" + targetSectionId).classList.add("active");
        
                    // Activate the \'hire-me\' button\'s corresponding nav link if it exists
                    const contactNavLink = document.querySelector(`.nav li a[href="#${targetSectionId}"]`);
                    if (contactNavLink) {
                        contactNavLink.classList.add("active");
                    }
                }
            });
        
            const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            
            navTogglerBtn.addEventListener("click", () => {
                asideSectionTogglerBtn();
            })
        
            function asideSectionTogglerBtn() {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for (let i=0; i<totalsection; i++) {
                    allsection[i].classList.toggle("open");
                }
            }