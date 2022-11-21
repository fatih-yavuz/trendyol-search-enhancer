let disabled = true; // enabled by default

const circle = document.getElementById('circle');
const cont = document.getElementById('cont');

function setChecked() {
  if (disabled) {
    circle.classList.remove('active');
    cont.classList.remove('activeForCont');
  } else {
    circle.classList.add('active');
    cont.classList.add('activeForCont');
  }
}

chrome.storage.local.get('disabled', (data) => {
  disabled = !!data.disabled;
  setChecked();
});

cont.onclick = () => {
  disabled = !disabled;
  chrome.storage.local.set({disabled}, () => {
    setChecked();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
  });
};

