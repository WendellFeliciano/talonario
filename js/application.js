$(document).ready(function(){
  $("#btn").click(function(){
    Android.showToast("Bosta");
  });
});
function showAndroidToast(toast) {
     Android.showToast(toast);
}
