const btn=document.querySelector("#btn");
const input=document.querySelector("#input");
const cityName=document.querySelector("#location");
const temp=document.querySelector("#temp");
const humidity=document.querySelector("#humidity-no");
const wind=document.querySelector("#wind-no");
const dat=document.querySelector("#date");
const timee=document.querySelector("#time");

btn.addEventListener("click",()=>{
    if(input.value.trim()===""){
        alert("please enter place")
    }
  const name=input.value
  weather(name);
})
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); 
    btn.click(); 
  }
});
const weather=async(name)=>{
 cityName.innerText=name;
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6d1f82346088aa2e0f09cc88d61f80a0&units=metric`;
 const response=await fetch(url);
 const data=await response.json();
 if (data.cod !== 200) {
  alert("City not found. Please try again!");
  return;
}
 
 temp.innerText=`${data.main.temp}°C`
 humidity.innerText=data.main.humidity
 wind.innerText=`${data.wind.speed}Km/h`
const date = new Date(data.dt * 1000);
const day = date.toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long"});
 dat.innerText=day

 const now = new Date()
 const Time = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: "Asia/Kolkata" };
const realTime=now.toLocaleTimeString(Time)
timee.innerText=realTime

}