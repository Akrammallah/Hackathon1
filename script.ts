// refrence
let refBtn = document.getElementById("refBtn");
console.log(refBtn)
let refSection = document.getElementById("refSection");

refBtn?.addEventListener('click',()=>{
  refSection!.classList.toggle('hide');
});

// education..........
 let refExp = document.getElementById("refExp");
 let ref_exp = document.getElementById("ref_exp");

 refExp?.addEventListener('click',()=>{
  ref_exp!.classList.toggle('hide');
});
let refLang = document.getElementById("refLang");
 let ref_lang = document.getElementById("ref_lang");

 refLang?.addEventListener('click',()=>{
  ref_lang!.classList.toggle('hide');
});


let refSkills = document.getElementById("refSkills");
 let ref_skills = document.getElementById("ref_skills");

 refSkills?.addEventListener('click',()=>{
  ref_skills!.classList.toggle('hide');
});

let refEducation = document.getElementById("refEducation");
 let ref_education = document.getElementById("ref_education");

 refEducation?.addEventListener('click',()=>{
  ref_education!.classList.toggle('hide');
});

let refContacts = document.getElementById("refContacts");
 let ref_contacts = document.getElementById("ref_contacts");

 refContacts?.addEventListener('click',()=>{
  ref_contacts!.classList.toggle('hide');
});

