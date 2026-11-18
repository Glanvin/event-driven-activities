var items = document.querySelectorAll(".item");

for (var i = 0; i < items.length; i++) {
    var el = items[i];
    // Capturing phase (true)
    el.addEventListener("click", doSomething, true);
    // Bubbling phase (false)
    el.addEventListener("click", doSomething, false);
}

function doSomething(e) {
    var phaseName = "";
    var badgeStyle = "";

    // e.eventPhase returns 1 (Capturing), 2 (Target), or 3 (Bubbling)
    if (e.eventPhase === Event.CAPTURING_PHASE) {
        phaseName = "⬇️ CAPTURING ";
        badgeStyle = "background: #2563eb; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;";
    } else if (e.eventPhase === Event.AT_TARGET) {
        phaseName = "🎯 AT TARGET ";
        badgeStyle = "background: #16a34a; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;";
    } else if (e.eventPhase === Event.BUBBLING_PHASE) {
        phaseName = "⬆️ BUBBLING  ";
        badgeStyle = "background: #d97706; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold;";
    }

    console.log(
        "%c" + phaseName + "%c Current: #" + e.currentTarget.id + " (Clicked: #" + e.target.id + ")",
        badgeStyle,
        "color: inherit; font-weight: normal;"
    );
}