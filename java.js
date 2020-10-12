
        function toggleSummary() {
            var summaryDiv = document.querySelector(".summary")
            var visibility = summaryDiv.style.display
            if (visibility === "block") {2
                summaryDiv.style.display = "none"
            } else {
                summaryDiv.style.display = "block"
            }
        }

        var dayDiv = document.querySelector(".div1")
        dayDiv.addEventListener("mouseover", toggleSummary)
        dayDiv.addEventListener("mouseout", toggleSummary)

        function toggleSummary2() {
            var summary2Div = document.querySelector (".summary2")
            var visibility = summary2Div.style.display
            if (visibility === "block") {2
                summary2Div.style.display = "none"
            } else {
                summary2Div.style.display = "block"
            }

        }

        var dayDiv = document.querySelector(".div2")
        dayDiv.addEventListener("mouseover", toggleSummary2)
        dayDiv.addEventListener("mouseout", toggleSummary2)

        function toggleSummary3() {
            var summary3Div = document.querySelector(".summary3")
            var visibility = summary3Div.style.display
            if (visibility === "block") {2
                summary3Div.style.display = "none"
            } else {
                summary3Div.style.display = "block"
            }
        }

        var dayDiv = document.querySelector(".div3")
        dayDiv.addEventListener("mouseover", toggleSummary3)
        dayDiv.addEventListener("mouseout", toggleSummary3)

function myFunction () {
    document.getElementById("box5").style.backgroundSize = "60px 120px";
}

