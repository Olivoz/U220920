function appendElement(target, elementName) {
  let element = document.createElement(elementName);
  return target.appendChild(element);
}

function appendCustomerInfo(target, value) {
  let tag = document.createElement("td");
  tag.innerText = value;
  target.appendChild(tag);
}

function appendCustomer(target, name, number, adress) {
  let customerTag = document.createElement("tr");
  appendCustomerInfo(customerTag, name);
  appendCustomerInfo(customerTag, number);
  appendCustomerInfo(customerTag, adress);
  target.appendChild(customerTag);
}

function build() {
  addButton.onclick = () => {
    let name = nameInput.value;
    let number = telInput.value;
    let adress = adressInput.value;
    if (!name || !number || !adress) return;
    appendCustomer(customerTable, name, number, adress);
  };
}
