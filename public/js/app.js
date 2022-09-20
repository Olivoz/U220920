const customers = [];
let id = 0;

function appendElement(target, elementName) {
  let element = document.createElement(elementName);
  return target.appendChild(element);
}

function appendCustomerInfo(target, value) {
  let tag = document.createElement("td");
  tag.innerText = value;
  target.appendChild(tag);
}

function appendCustomer(target, customer) {
  let customerTag = document.createElement("tr");
  customerTag.id = customer.id;
  appendCustomerInfo(customerTag, customer.id);
  appendCustomerInfo(customerTag, customer.name);
  appendCustomerInfo(customerTag, customer.number);
  appendCustomerInfo(customerTag, customer.adress);
  target.appendChild(customerTag);
  return customerTag;
}

function build() {
  addButton.onclick = () => {
    let name = nameInput.value;
    let number = telInput.value;
    let adress = adressInput.value;
    if (!name || !number || !adress) return;
    const customer = {
      id: id++,
      name: name,
      number: number,
      adress: adress,
    };

    customer.htmlElement = appendCustomer(customerTable, customer);
    customers.push(customer);
  };

  findCustomerButton.onclick = () => {
    window.location = "#" + search.value;
  };
}
