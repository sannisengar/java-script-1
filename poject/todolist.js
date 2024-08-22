
const userNameTextField = document.getElementById('username')
const addUserBtn = document.getElementById('addUser')

let userData=[]

addUserBtn.onclick = () => {
    const name = userNameTextField.value
    // alert(name)
    userData.push({ 'name': name })
    console.log(userData)

}
