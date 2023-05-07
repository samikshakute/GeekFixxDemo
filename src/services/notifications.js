export const notify = (url) => {
  console.log("its time");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Exercise Time", {
          body: "Look away from the screen",
          icon: "./assets/cartoon/smileydev.png",
          data: url,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "Exercise Reminder",
          requireInteraction: true,
          actions: [
            {
              action: "exercise-action",
              title: "Do exercise",
            },
          ],
        });
        console.log();
      });
    }
  });

  const audio = new Audio(
    "https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
  );
  audio.play();
};

export const notifySitStraight = (url) => {
  console.log("hereeeeeeee");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Sit Straight", {
          body: "Bad posture sit straight",
          icon: "./assets/cartoon/saddev.png",
          data: url,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "Sit straight",
        });
        console.log();
      });
    }
  });

  const audio = new Audio(
    "https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
  );
  audio.play();
};

export const notifyEar = (url) => {
  console.log("Ear");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Earphone remove time", {
          body: "Stop using earphones now!",
          icon: "./assets/cartoon/smileydev.png",
          data: url,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "Exercise Reminder",
          requireInteraction: true,
          actions: [
            {
              action: "exercise-action",
              title: "Do exercise",
            },
          ],
        });
        console.log();
      });
    }
  });
  const audio = new Audio(
    "https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
  );
  audio.play();
};

export const notifyStress = (url) => {
  console.log("Stress");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Let's have fun!", {
          body: "Watch Funny Video",
          icon: "./assets/cartoon/smileydev.png",
          data: url,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "Watch Video!",
          requireInteraction: true,
        });
        console.log();
      });
    }
  });
  const audio = new Audio(
    "https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
  );
  audio.play();
};

export const notifyWater = (url) => {
  console.log("Water");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Drink Water", {
          body: "Time to drink water",
          icon: "./assets/cartoon/smileydev.png",
          data: url,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "Watch Video!",
          requireInteraction: true,
        });
        console.log();
      });
    }
  });
  const audio = new Audio(
    "https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
  );
  audio.play();
};
