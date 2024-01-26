function copyEmail(){
  const mail = "hampus03brink@gmail.com"
  
  navigator.clipboard.writeText(mail)
  alert(`Copied "${mail}" to clipboard`)
}