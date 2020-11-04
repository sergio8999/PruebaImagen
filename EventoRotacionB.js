function main() {
    if (window.DeviceOrientationEvent) {
        let elemtoCubo = document.getElementById("3DElement");

        window.addEventListener("deviceorientation", function (e) {
            elemtoCubo.style.transform =
                "rotateZ(" + e.alpha + "deg) " +
                "rotateX(" + e.beta + "deg) " +
                "rotateY(" + (-e.gamma) + "deg)";
        });
    }
}

window.addEventListener('load',main);