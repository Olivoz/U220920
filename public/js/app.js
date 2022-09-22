const customers = [];
let id = 0;
let highlighted;

function appendElement(target, elementName) {
  let element = document.createElement(elementName);
  return target.appendChild(element);
}

function appendCustomerInfo(target, value) {
  let tag = document.createElement("td");
  tag.innerText = value;
  target.appendChild(tag);
}

function appendEmailInfo(target, email) {
  let tag = document.createElement("td");
  let emailTag = appendElement(tag, "a");
  emailTag.innerText = email;
  emailTag.href = `mailto:${email}`;
  target.appendChild(tag);
}

function appendCustomer(target, customer) {
  let customerTag = document.createElement("tr");
  customerTag.id = customer.id;
  appendCustomerInfo(customerTag, customer.id);
  appendCustomerInfo(customerTag, customer.name);
  appendCustomerInfo(customerTag, customer.number);
  appendCustomerInfo(customerTag, customer.adress);
  appendEmailInfo(customerTag, customer.email);
  target.appendChild(customerTag);
  return customerTag;
}

function build() {
  addButton.onclick = () => {
    let name = nameInput.value;
    let number = telInput.value;
    let adress = adressInput.value;
    let email = emailInput.value;
    if (!name || !number || !adress || !email) return;
    const customer = {
      id: id++,
      name: name,
      number: number,
      adress: adress,
      email: email,
    };

    appendCustomer(customerTable, customer);
    customers.push(customer);
    for (element of app.children) {
      if (element.tagName == "INPUT" && element.id != "search")
        element.value = "";
    }
  };

  findCustomerButton.onclick = () => {
    let id = search.value;
    if (!id) return;
    let foundCustomerElement = document.getElementById(id);
    if (!foundCustomerElement) return;
    window.location = `#${id}`;
    if (highlighted) highlighted.style = undefined;
    highlighted = foundCustomerElement;
    highlighted.style.backgroundColor = "red";
  };
}
