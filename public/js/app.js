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
    if (!id && customers.find((customer) => customer.id == id)) return;
    let foundCustomer = customers.find((customer) => customer.id == id);
    if (!foundCustomer) return;

    found.style.display = "block";
    for (element of foundTable.children) {
      if (element.tagName == "TR") element.remove();
    }

    appendCustomer(foundTable, foundCustomer);
  };

  showCustomersButton.onclick = () => {
    if (customerTable.style.display == "none")
      customerTable.style.display = "block";
    else customerTable.style.display = "none";
  };
}
