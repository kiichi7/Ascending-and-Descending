#pragma strict
private var j : float;

function Start () {

}

function Update () {

	if (Input.GetButton ("Jump")) {
		j = 1;
	}
	else j = 0;

	transform.Translate(5*Input.GetAxis("Horizontal")*Time.deltaTime,0.1*j,5*Input.GetAxis("Vertical")*Time.deltaTime,Camera.main.transform);

	if ((transform.position.x > -5.5)&&(transform.position.x < -1.5)&&(transform.position.z > 3.5)&&(transform.position.z < 5)) {
		
		transform.position.x -= 3;
		transform.position.y -= 8.5;
		transform.position.z += 6;
		
	}
	if ((transform.position.x > -8.5)&&(transform.position.x < -4.5)&&(transform.position.z > 8)&&(transform.position.z < 9.5)) {
		
		transform.position.x += 3;
		transform.position.y += 8.5;
		transform.position.z -= 6;
		
	}


}