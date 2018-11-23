
export async function isLoggedIn() {

  await FB.getLoginStatus(response => {
    console.log('User status: ' + response.status);
    console.log(response.authResponse);
  });
}

