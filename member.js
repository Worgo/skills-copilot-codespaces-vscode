function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsButton = document.getElementById("memberSkillsButton");
  var memberSkillsButtonClose = document.getElementById("memberSkillsButtonClose");
  memberSkillsButton.addEventListener("click", function() {
    memberSkills.style.display = "block";
    member.style.display = "none";
  });
  memberSkillsButtonClose.addEventListener("click", function() {
    memberSkills.style.display = "none";
    member.style.display = "block";
  });
}
