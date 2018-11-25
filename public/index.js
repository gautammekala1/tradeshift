
    const config = () => {

        const hypotenuse = parseInt(document.getElementById('hypotenuse').value);
        const opposite = parseInt(document.getElementById('opposite').value);
        const adjacent = parseInt(document.getElementById('adjacent').value);

       
        if(isNaN(hypotenuse) || isNaN(opposite) || isNaN(adjacent)){  

            ts.ui.Dialog.warning('Please Enter only Valid numbers');

        }else if(hypotenuse === 0 || opposite === 0 ||
            adjacent === 0) {

            ts.ui.Dialog.warning('Please Enter only Valid numbers');

        }else {

		    const controller = new triangleComponent(hypotenuse,opposite,adjacent);
            ts.ui.Notification.success(controller.triangleType);

        }
	}

    document.getElementById("button").addEventListener("click", config);  