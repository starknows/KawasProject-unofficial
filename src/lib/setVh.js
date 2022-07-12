let preventSetVhLoop = null;
export default function setVh() {
	if (preventSetVhLoop) return;
	console.log('reset VhVw');
	preventSetVhLoop = setTimeout(() => {
		clearTimeout(preventSetVhLoop);
		document.querySelector(':root').style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
		preventSetVhLoop = null;
	}, 100);
}
