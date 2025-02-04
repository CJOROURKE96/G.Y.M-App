const exercises = [
  {
    name: "Incline Hammer Curls",
    type: "strength",
    muscle: "biceps",
    equipment: "dumbbell",
    difficulty: "beginner",
    instructions:
      "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
  },

  {
    name: "EZ-bar spider curl",
    type: "strength",
    muscle: "biceps",
    equipment: "barbell",
    difficulty: "advanced",
    instructions:
      "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off. Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench. Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench. Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other. Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the barbell back to the starting position as your breathe in. . Repeat for the recommended amount of repetitions.  Variation: You can also use dumbbells when performing this exercise. Just make sure you place the dumbbells on the part of the preacher bench where you would normally sit properly.",
  },
  {
    name: "Hammer Curls",
    type: "strength",
    muscle: "biceps",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc.",
  },
  {
    name: "EZ-Bar Curl",
    type: "strength",
    muscle: "biceps",
    equipment: "e-z curl bar",
    difficulty: "intermediate",
    instructions:
      "Stand up straight while holding an EZ curl bar at the wide outer handle. The palms of your hands should be facing forward and slightly tilted inward due to the shape of the bar. Keep your elbows close to your torso. This will be your starting position. Now, while keeping your upper arms stationary, exhale and curl the weights forward while contracting the biceps. Focus on only moving your forearms. Continue to raise the weight until your biceps are fully contracted and the bar is at shoulder level. Hold the top contracted position for a moment and squeeze the biceps. Then inhale and slowly lower the bar back to the starting position. Repeat for the recommended amount of repetitions.  Variations: You can also perform this movement using an E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes.",
  },
  {
    name: "Biceps curl to shoulder press",
    type: "strength",
    muscle: "biceps",
    equipment: "dumbbell",
    difficulty: "beginner",
    instructions:
      "Begin in a standing position with a dumbbell in each hand. Your arms should be hanging at your sides with your palms facing forward. Look directly ahead, keeping your chest up, with your feet shoulder-width apart. This will be your starting position. Initiate the movement by flexing the elbows to curl the weight. Do not use momentum or flex through the shoulder, instead use a controlled motion. Execute the pressing movement by extending the arm, flexing and abducting the shoulder to rotate the arm as you press above your head. Pause at the top of the motion before reversing the movement to return to the starting position. Complete the desired number of repetitions before switching to the opposite side.",
  },
  {
    name: "Barbell Curl",
    type: "strength",
    muscle: "biceps",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using a straight bar attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes.",
  },
  {
    name: "Concentration curl",
    type: "strength",
    muscle: "biceps",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor. Use your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position. While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the dumbbells back to starting position as your breathe in. Caution: Avoid swinging motions at any time. Repeat for the recommended amount of repetitions. Then repeat the movement with the left arm.  Variations: This exercise can be performed standing with the torso bent forward and the arm in front of you. In this case, no leg support is used for the back of your arm so you will need to make extra effort to ensure no movement of the upper arm. This is a more challenging version of the exercise and is not recommended for people with lower back issues.",
  },
  {
    name: "Landmine twist",
    type: "strength",
    muscle: "abdominals",
    equipment: "other",
    difficulty: "advanced",
    instructions:
      "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.",
  },
  {
    name: "Elbow plank",
    type: "strength",
    muscle: "abdominals",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.",
  },
  {
    name: "Bottoms Up",
    type: "strength",
    muscle: "abdominals",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position. To perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor. After a brief pause, return to the starting position.",
  },
  {
    name: "Suspended ab fall-out",
    type: "strength",
    muscle: "abdominals",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Adjust the straps so the handles are at an appropriate height, below waist level. Begin standing and grasping the handles. Lean into the straps, moving to an incline push-up position. This will be your starting position. Keeping your arms straight, lean further into the suspension straps, bringing your body closer to the ground, allowing your shoulders to extend, raising your arms up and over your head. Maintain a neutral spine and keep the rest of your body straight, your shoulders being the only joints allowed to move. Pause during the peak contraction, and then return to the starting position.",
  },
  {
    name: "Dumbbell V-Sit Cross Jab",
    type: "strength",
    muscle: "abdominals",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      'Begin seated on your butt with your knees bent and feet on the ground. Lean your upper body back to form a 45-degree angle with the floor. Bring your feet off the ground so that your body resembles a "V" shape. Grasp a dumbbell in each hand and hold tight to your chest with palms facing each other. This will be your starting position. While keeping your core tight and maintaining your body\'s "V" position, quickly extend your left arm straight out (similar to a jab) and then bring it back to the starting position while simultaneously punching out with the right arm. Your torso and legs may slightly rotate side to side opposite of your hands throughout the movementâ€”this is okay. A punch with each hand counts as one total repetition. Repeat for recommended number of repetitions.',
  },
  {
    name: "Standing cable low-to-high twist",
    type: "strength",
    muscle: "abdominals",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "Connect a standard handle on a tower, and move the cable to the lowest pulley position. With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately armâ€™s length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable. With your feet positioned shoulder width apart, squat down and grab the handle with both hands. Your arms should still be fully extended. In one motion, pull the handle up and across your body until your arms are in a fully-extended position above your head. Keep your back straight and your arms close to your body as you pivot your back foot and straighten your legs to get a full range of motion. Retract your arms and then your body. Return to the neutral position in a slow and controlled manner. Repeat to failure. Then, reposition and repeat the same series of movements on the opposite side.  Tip: You will twist your entire body with this exercise, but focus on getting maximal torso rotation and a strong clinch at the end of the movement. To ensure a good mind-muscle connection, keep your abs tense at all times.",
  },
  {
    name: "Dumbbell spell caster",
    type: "strength",
    muscle: "abdominals",
    equipment: "dumbbell",
    difficulty: "beginner",
    instructions:
      "Hold a dumbbell in each hand with a pronated grip. Your feet should be wide with your hips and knees extended. This will be your starting position. Begin the movement by pulling both of the dumbbells to one side next to your hip, rotating your torso. Keeping your arms straight and the dumbbells parallel to the ground, rotate your torso to swing the weights to your opposite side. Continue alternating, rotating from one side to the other until the set is complete.",
  },
  {
    name: "Decline reverse crunch",
    type: "strength",
    muscle: "abdominals",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Lie on your back on a decline bench and hold on to the top of the bench with both hands. Don't let your body slip down from this position. Hold your legs parallel to the floor using your abs to hold them there while keeping your knees and feet together. Tip: Your legs should be fully extended with a slight bend on the knee. This will be your starting position. While exhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the bench. At the end of this movement your knees will be touching your chest. Hold the contraction for a second and move your legs back to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations: You can do the movement on a flat surface and as you get more advanced you can use ankle weights.",
  },
  {
    name: "Spider crawl",
    type: "strength",
    muscle: "abdominals",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Begin in a prone position on the floor. Support your weight on your hands and toes, with your feet together and your body straight. Your arms should be bent to 90 degrees. This will be your starting position. Initiate the movement by raising one foot off of the ground. Externally rotate the leg and bring the knee toward your elbow, as far forward as possible. Return this leg to the starting position and repeat on the opposite side.",
  },
  {
    name: "Cocoons",
    type: "strength",
    muscle: "abdominals",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position. To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion. After a brief pause, return to the starting position.",
  },
  {
    name: "Smith Machine Calf Raise",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "advanced",
    instructions:
      "Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels. Repeat for the recommended amount of repetitions.",
  },
  {
    name: "Standing Calf Raises",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "beginner",
    instructions:
      "Adjust the padded lever of the calf raise machine to fit your height. Place your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: If you suffer from lower back problems, a better exercise is the calf press as during a standing calf raise the back has to support the weight being lifted. Also, maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Variations: There are several other ways to perform a standing calf raise. A barbell instead of a machine can be used instead as well as dumbbells, one leg or two legs at a time. Refer to the exercise descriptions of these movements below. A smith machine can be used for calf raises as well.",
  },
  {
    name: "Seated Calf Raise",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "Sit on the machine and place your toes on the lower portion of the platform provided with the heels extending off. Choose the toe positioning of your choice (forward, in, or out) as per the beginning of this chapter. Place your lower thighs under the lever pad, which will need to be adjusted according to the height of your thighs. Now place your hands on top of the lever pad in order to prevent it from slipping forward. Lift the lever slightly by pushing your heels up and release the safety bar. This will be your starting position. Slowly lower your heels by bending at the ankles until the calves are fully stretched. Inhale as you perform this movement. Raise the heels by extending the ankles as high as possible as you contract the calves and breathe out. Hold the top contraction for a second. Repeat for the recommended amount of repetitions.",
  },
  {
    name: "Calf Press On The Leg Press Machine",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you without locking your knees. (Note: In some leg press units you can leave the safety bars on for increased safety. If your leg press unit allows for this, then this is the preferred method of performing the exercise.) Your torso and the legs should make perfect 90-degree angle. Now carefully place your toes and balls of your feet on the lower portion of the platform with the heels extending off. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position. Press on the platform by raising your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: Be very cautious as you place the feet in the bottom part of the platform as if you slip and the safety bars are not locked then you could suffer a serious accident. Variations: You can perform this exercise one leg at a time.",
  },
  {
    name: "Rocking Standing Calf Raise",
    type: "strength",
    muscle: "calves",
    equipment: "barbell",
    difficulty: "beginner",
    instructions:
      "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place it on the back of your shoulders (slightly below the neck). Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance. Also maintain a straight back and keep the knees with a slight bend; never locked. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending (other than the slight initial bend we created during positioning) at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Now lift your toes by contracting the tibia muscles in the front of the calves as you breathe out. Hold for a second and bring them back down as you breathe in. Repeat for the recommended amount of repetitions.  Caution: Maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Also, choose a conservative weight. This exercise requires a lot of balance and choosing too much weight may cause you to lose balance and fall. Variations: A smith machine can be used for this exercise as well and it is a better choice for those with poor balance. Dumbbells can be used also.",
  },
  {
    name: "Calf Press",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "beginner",
    instructions:
      "Adjust the seat so that your legs are only slightly bent in the start position. The balls of your feet should be firmly on the platform. Select an appropriate weight, and grasp the handles. This will be your starting position. Straighten the legs by extending the knees, just barely lifting the weight from the stack. Your ankle should be fully flexed, toes pointing up. Execute the movement by pressing downward through the balls of your feet as far as possible. After a brief pause, reverse the motion and repeat.",
  },
  {
    name: "Standing barbell calf raise",
    type: "strength",
    muscle: "calves",
    equipment: "barbell",
    difficulty: "beginner",
    instructions:
      "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the bar on the back of your shoulders (slightly below the neck). Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. The knees should be kept with a slight bend; never locked. This will be your starting position. Tip: For better range of motion you may also place the ball of your feet on a wooden block but be careful as this option requires more balance and a sturdy block. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: If you suffer from lower back problems, a better exercise is the calf press as during a standing calf raise the back has to support the weight being lifted. Also, maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Variations: There are several other ways to perform a standing calf raise. A calf press machine instead of a squat rack can be used as well as dumbbells with one leg or two legs at a time. A smith machine can be used for calf raises as well. You can also perform the barbell calf raise using a piece of wood to place the ball of the foot. This will allow you to get a better range of motion. However be cautious as in this case you will need to balance yourself much better.",
  },
  {
    name: "Barbell Seated Calf Raise",
    type: "strength",
    muscle: "calves",
    equipment: "barbell",
    difficulty: "beginner",
    instructions:
      "Place a block about 12 inches in front of a flat bench. Sit on the bench and place the ball of your feet on the block. Have someone place a barbell over your upper thighs about 3 inches above your knees and hold it there. This will be your starting position. Raise up on your toes as high as possible as you squeeze the calves and as you breathe out. After a second contraction, slowly go back to the starting position. Tip: To get maximum benefit stretch your calves as far as you can. Repeat for the recommended amount of repetitions.  Variations: You can use the smith machine or the seated calf raise machine in order to perform this exercise. Alternatively, you can also use dumbbells by placing one on top of each thigh.",
  },
  {
    name: "Balance Board",
    type: "strength",
    muscle: "calves",
    equipment: "other",
    difficulty: "beginner",
    instructions:
      "Note: This exercise is designed to increase balance.  Place a balance board in front of you. Stand up on it and try to balance yourself. Hold the balance for as long as desired.  Caution: If your balance is poor, start out with one of the less challenging boards. Variations: You can perform this exercise using various types of balance boards. Some are more challenging than others.",
  },
  {
    name: "Weighted donkey calf raise",
    type: "strength",
    muscle: "calves",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "For this exercise you will need access to a donkey calf raise machine. Start by positioning your lower back and hips under the padded lever provided. The tailbone area should be the one making contact with the pad. Place both of your arms on the side handles and place the balls of your feet on the calf block with the heels extending off. Align the toes forward, inward or outward, depending on the area you wish to target, and straighten the knees without locking them. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Variations: If you don't have a machine available but have access to a calf block and a sturdy object to hold on to, you can perform this using as resistance a person sitting on your lower back (around the tailbone area).",
  },
  {
    name: "Dumbbell Bench Press",
    type: "strength",
    muscle: "chest",
    equipment: "dumbbell",
    difficulty: "advanced",
    instructions:
      "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.",
  },
  {
    name: "Pushups",
    type: "strength",
    muscle: "chest",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.",
  },
  {
    name: "Close-grip bench press",
    type: "strength",
    muscle: "chest",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Lie back on a flat bench. Using a close grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that - as opposed to a regular bench press - you keep the elbows close to the torso at all times in order to maximize triceps involvement. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall on your middle chest and nowhere else. Variations: This exercise can also be performed with an e-z bar using the inner handle as well as dumbbells, in which case the palms of the hands will be facing each other.",
  },
  {
    name: "Dumbbell Flyes",
    type: "strength",
    muscle: "chest",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variations: You may want to use a palms facing forward version for different stimulation.",
  },
  {
    name: "Incline dumbbell bench press",
    type: "strength",
    muscle: "chest",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells.  Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.",
  },
  {
    name: "Low-cable cross-over",
    type: "strength",
    muscle: "chest",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand. Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position. With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up. Return your arms back to the starting position after a brief pause.",
  },
  {
    name: "Barbell Bench Press - Medium Grip",
    type: "strength",
    muscle: "chest",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest. After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.  Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to touch your middle chest and nowhere else. Don't bounce the weight off your chest. You should be in full control of the barbell at all times.",
  },
  {
    name: "Chest dip",
    type: "strength",
    muscle: "chest",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars. While breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest. Once you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
  },
  {
    name: "Decline Dumbbell Flyes",
    type: "strength",
    muscle: "chest",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other. Once you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.  Variation: You may want to use a palms facing forward version for different stimulation.",
  },
  {
    name: "Bodyweight Flyes",
    type: "strength",
    muscle: "chest",
    equipment: "e-z curl bar",
    difficulty: "beginner",
    instructions:
      "Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll. Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight. Place your hands on the bars. This will be your starting position. Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion. After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement.",
  },
  {
    name: "Single-leg cable hip extension",
    type: "strength",
    muscle: "glutes",
    equipment: "cable",
    difficulty: "advanced",
    instructions:
      'Hook a leather ankle cuff to a low cable pulley and then attach the cuff to your ankle. Face the weight stack from a distance of about two feet, grasping the steel frame for support. While keeping your knees and hips bent slightly and your abs tight, contract your glutes to slowly "kick" the working leg back in a semicircular arc as high as it will comfortably go as you breathe out. Tip: At full extension, squeeze your glutes for a second in order to achieve a peak contraction. Now slowly bring your working leg forward, resisting the pull of the cable until you reach the starting position. Repeat for the recommended amount of repetitions. Switch legs and repeat the movement for the other side.  Variations: You can perform this exercise with exercise bands.',
  },
  {
    name: "Glute bridge",
    type: "strength",
    muscle: "glutes",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position. Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second. Slowly go back to the starting position as you breathe in.  Variations: You can perform this exercise one leg at a time.",
  },
  {
    name: "Single-leg glute bridge",
    type: "strength",
    muscle: "glutes",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Lay on the floor with your feet flat and knees bent. Raise one leg off of the ground, pulling the knee to your chest. This will be your starting position. Execute the movement by driving through the heel, extending your hip upward and raising your glutes off of the ground. Extend as far as possible, pause and then return to the starting position.",
  },
  {
    name: "Step-up with knee raise",
    type: "strength",
    muscle: "glutes",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Stand facing a box or bench of an appropriate height with your feet together. This will be your starting position. Begin the movement by stepping up, putting your left foot on the top of the bench. Extend through the hip and knee of your front leg to stand up on the box. As you stand on the box with your left leg, flex your right knee and hip, bringing your knee as high as you can. Reverse this motion to step down off the box, and then repeat the sequence on the opposite leg.",
  },
  {
    name: "Kettlebell thruster",
    type: "strength",
    muscle: "glutes",
    equipment: "kettlebells",
    difficulty: "intermediate",
    instructions:
      "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so. This will be your starting position. Begin to squat by flexing your hips and knees, lowering your hips between your legs. Maintain an upright, straight back as you descend as low as you can. At the bottom, reverse direction and squat by extending your knees and hips, driving through your heels. As you do so, press both kettlebells overhead by extending your arms straight up, using the momentum from the squat to help drive the weights upward. As you begin the next repetition, return the weights to the shoulders.",
  },
  {
    name: "Flutter Kicks",
    type: "strength",
    muscle: "glutes",
    equipment: "None",
    difficulty: "intermediate",
    instructions:
      "On a flat bench lie facedown with the hips on the edge of the bench, the legs straight with toes high off the floor and with the arms on top of the bench holding on to the front edge. Squeeze your glutes and hamstrings and straighten the legs until they are level with the hips. This will be your starting position. Start the movement by lifting the left leg higher than the right leg. Then lower the left leg as you lift the right leg. Continue alternating in this manner (as though you are doing a flutter kick in water) until you have done the recommended amount of repetitions for each leg. Make sure that you keep a controlled movement at all times. Tip: You will breathe normally as you perform this movement.  Variations: As you get more advanced you can use ankle weights.",
  },
  {
    name: "Glute Kickback",
    type: "strength",
    muscle: "glutes",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "Kneel on the floor or an exercise mat and bend at the waist with your arms extended in front of you (perpendicular to the torso) in order to get into a kneeling push-up position but with the arms spaced at shoulder width. Your head should be looking forward and the bend of the knees should create a 90-degree angle between the hamstrings and the calves. This will be your starting position. As you exhale, lift up your right leg until the hamstrings are in line with the back while maintaining the 90-degree angle bend. Contract the glutes throughout this movement and hold the contraction at the top for a second. Tip: At the end of the movement the upper leg should be parallel to the floor while the calf should be perpendicular to it. Go back to the initial position as you inhale and now repeat with the left leg. Continue to alternate legs until all of the recommended repetitions have been performed.  Variations: For this exercise you can also perform all of the repetitions with one leg first and then the other one. Additionally, you can also add ankle weights.",
  },
  {
    name: "Barbell Deadlift",
    type: "strength",
    muscle: "hamstrings",
    equipment: "barbell",
    difficulty: "advanced",
    instructions:
      "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor.",
  },
  {
    name: "Romanian Deadlift With Dumbbells",
    type: "strength",
    muscle: "hamstrings",
    equipment: "dumbbell",
    difficulty: "beginner",
    instructions:
      "Begin in a standing position with a dumbbell in each hand. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing your hips, slowly pushing your butt as far back as you can. This should entail a horizontal movement of the hips, rather than a downward movement. The knees should only partially bend, and your weight should remain on your heels. Drive your butt back as far as you can, which should generate tension in your hamstrings as your hands approach knee level. Maintain an arch in your back throughout the exercise. When your hips cannot perform any further backward movement, pause, and then slowly return to the starting position by extending the hips.",
  },
  {
    name: "Natural Glute Ham Raise",
    type: "strength",
    muscle: "hamstrings",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "Using the leg pad of a lat pulldown machine or a preacher bench, position yourself so that your ankles are under the pads, knees on the seat, and you are facing away from the machine. You should be upright and maintaining good posture. This will be your starting position. Lower yourself under control until your knees are almost completely straight. Remaining in control, raise yourself back up to the starting position. If you are unable to complete a rep, use a band, a partner, or push off of a box to aid in completing a repetition.",
  },
  {
    name: "Glute ham raise-",
    type: "strength",
    muscle: "hamstrings",
    equipment: "none",
    difficulty: "beginner",
    instructions:
      "You can use a partner for this exercise or brace your feet under something stable. Begin on your knees with your upper legs and torso upright. If using a partner, they will firmly hold your feet to keep you in position. This will be your starting position. Lower yourself by extending at the knee, taking care to NOT flex the hips as you go forward. Place your hands in front of you as you reach the floor. This movement is very difficult and you may be unable to do it unaided. Use your arms to lightly push off the floor to aid your return to the starting position.",
  },
  {
    name: "Back extension",
    type: "strength",
    muscle: "lower back",
    equipment: "body only",
    difficulty: "advanced",
    instructions:
      "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.",
  },
  {
    name: "Hyperextensions With No Hyperextension Bench",
    type: "strength",
    muscle: "lower back",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "With someone holding down your legs, slide yourself down to the edge a flat bench until your hips hang off the end of the bench. Tip: Your entire upper body should be hanging down towards the floor. Also, you will be in the same position as if you were on a hyperextension bench but the range of motion will be shorter due to the height of the flat bench vs. that of the hyperextension bench. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you almost touch the floor or you feel a nice stretch on the hamstrings (whichever comes first). Tip: Never round the back as you perform this exercise. Slowly raise your torso back to the initial position as you exhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using a hyperextension bench. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.",
  },
  {
    name: "Superman",
    type: "stretching",
    muscle: "lower back",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "To begin, lie straight and face down on the floor or exercise mat. Your arms should be fully extended in front of you. This is the starting position. Simultaneously raise your arms, legs, and chest off of the floor and hold this contraction for 2 seconds. Tip: Squeeze your lower back to get the best results from this exercise. Remember to exhale during this movement. Note: When holding the contracted position, you should look like superman when he is flying. Slowly begin to lower your arms, legs and chest back down to the starting position while inhaling. Repeat for the recommended amount of repetitions prescribed in your program.  Variations: You can also perform this exercise using one arm and leg at a time. Simply elevating your left leg, arm and side of your chest and do the same with the right side.",
  },
  {
    name: "T-Bar Row with Handle",
    type: "strength",
    muscle: "middle back",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position.",
  },
  {
    name: "Reverse-grip bent-over row",
    type: "strength",
    muscle: "middle back",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Stand erect while holding a barbell with a supinated grip (palms facing up). Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Caution:  This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Also, just like with the bent knee dead-lift, if you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more.  Variations: You can perform the same exercise using a pronated (palms facing out) grip or using dumbbells.",
  },
  {
    name: "One-Arm Dumbbell Row",
    type: "strength",
    muscle: "middle back",
    equipment: "dumbbell",
    difficulty: "advanced",
    instructions:
      "Choose a flat bench and place a dumbbell on each side of it. Place the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support. Use the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position. Pull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Breathe out as you perform this step. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Also, make sure that the force is performed with the back muscles and not the arms. Finally, the upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the dumbbell; therefore do not try to pull the dumbbell up using the forearms. Lower the resistance straight down to the starting position. Breathe in as you perform this step. Repeat the movement for the specified amount of repetitions. Switch sides and repeat again with the other arm.  Variations: One-arm rows can also be performed using a high pulley or a low pulley instead of a dumbbell.",
  },
  {
    name: "One-Arm Long Bar Row",
    type: "strength",
    muscle: "middle back",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand next to the bar, and take a grip with one hand close to the collar. Using your hips and legs, rise to a standing position. Assume a bent-knee stance with your hips back and your chest up. Your arm should be extended. This will be your starting position. Pull the weight to your side by retracting the shoulder and flexing the elbow. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position.",
  },
  {
    name: "T-Bar Row",
    type: "strength",
    muscle: "middle back",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Load the bar to an appropriate weight for your training. Stand astride the bar and bend at the hips to take a pronated grip on the handles. Ensure that your back remains flat, and then remove the weight from the rests, letting the bar hang at arms length. This will be your starting position. Perform the movement by flexing the elbows and retracting the shoulder blades, pulling the weight to your chest. After a brief pause at the top of the motion, return to the starting position.",
  },
  {
    name: "Bent Over Two-Arm Long Bar Row",
    type: "strength",
    muscle: "middle back",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward. Bend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent. Now grab the bar with both arms just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position. Pull the bar straight up with your elbows in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Use a stirrup or double handle cable attachment by hooking it under the end of the bar. Slowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones). Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise using a low pulley or T-bar row machine.",
  },
  {
    name: "Alternating sit-through with crunch",
    type: "strength",
    muscle: "middle back",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward. Bend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent. Now grab the bar with one arm just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position. Pull the bar straight up with your elbow in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Do not allow for any swinging of the torso. Only the arm should move. Slowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones). Repeat for the recommended amount of repetitions and switch arms.  Variations: You can perform this exercise using a low pulley.",
  },
  {
    name: "Rower",
    type: "cardio",
    muscle: "middle back",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "To begin, seat yourself on the rower. Make sure that your heels are resting comfortably against the base of the foot pedals and that the straps are secured. Select the program that you wish to use, if applicable. Sit up straight and bend forward at the hips. There are three phases of movement when using a rower. The first phase is when you come forward on the rower. Your knees are bent and against your chest. Your upper body is leaning slightly forward while still maintaining good posture.Next, push against the foot pedals and extend your legs while bringing your hands to your upper abdominal area, squeezing your shoulders back as you do so. To avoid straining your back, use primarily your leg and hip muscles. The recovery phase simply involves straightening your arms, bending the knees, and bringing your body forward again as you transition back into the first phase.",
  },
  {
    name: "Seated Cable Rows",
    type: "strength",
    muscle: "middle back",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "For this exercise you will need access to a low pulley row machine with a V-bar. Note: The V-bar will enable you to have a neutral grip where the palms of your hands face each other. To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked. Lean over as you keep the natural alignment of your back and grab the V-bar handles. With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise. Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in. Repeat for the recommended amount of repetitions.  Caution: Avoid swinging your torso back and forth as you can cause lower back injury by doing so. Variations: You can use a straight bar instead of a V-Bar and perform with a pronated grip (palms facing down-forward) or a supinated grip (palms facing up-reverse grip).",
  },
  {
    name: "Incline dumbbell row",
    type: "strength",
    muscle: "middle back",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Using a neutral grip, lean into an incline bench. Take a dumbbell in each hand with a neutral grip, beginning with the arms straight. This will be your starting position. Retract the shoulder blades and flex the elbows to row the dumbbells to your side. Pause at the top of the motion, and then return to the starting position.",
  },
  {
    name: "Single-Leg Press",
    type: "strength",
    muscle: "quadriceps",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "Load the sled to an appropriate weight. Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Maintain good spinal position with your head and chest up. Supporting the weight, fully extend the knee and unlock the sled. This will be your starting position. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. Do not allow your lumbar to take the load by moving your pelvis. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee. Complete all repetitions for one leg before switching to the other.",
  },
  {
    name: "Barbell Full Squat",
    type: "strength",
    muscle: "quadriceps",
    equipment: "barbell",
    difficulty: "advanced",
    instructions:
      "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position. Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position. Repeat for the recommended amount of repetitions.  This type of squat allows a greater range of motion, and allows the trunk to maintain a more vertical position than other types of squats, due to foot position and the higher bar position.",
  },
  {
    name: "Jumping rope",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation. Rope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.",
  },
  {
    name: "Smith machine shrug",
    type: "strength",
    muscle: "traps",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "To begin, set the bar height on the smith machine around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grab the bar using a pronated grip (palms facing you) shoulder width apart from each other. Lift the barbell up and fully extend your arms with your back straight. This is the starting position. While exhaling, elevate the bar by raising your shoulders until they come close to touching your ears. Hold the contraction for a second before lowering the bar back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations:  This exercise can be performed using a squat rack with a barbell. However, be careful not to select a weight that is so heavy that it causes you to break good form as you do not have the support of the smith machine for this variation. Too much weight can harm your back. You can also use dumbbells to perform this exercise.",
  },
  {
    name: "Leverage Shrug",
    type: "strength",
    muscle: "traps",
    equipment: "machine",
    difficulty: "advanced",
    instructions:
      "Load the pins to an appropriate weight. Position yourself directly between the handles. Grasp the top handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up. Drive through the floor with your heels, extending your hips and knees as you rise to a standing position. Keep your arms straight throughout the movement, finishing with your shoulders back. This will be your starting position. Raise the weight by shrugging the shoulders towards your ears, moving straight up and down. Pause at the top of the motion, and then return the weight to the starting position.",
  },
  {
    name: "Standing dumbbell shrug",
    type: "strength",
    muscle: "traps",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides. Lift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down. Lower the dumbbells back to the original position. Repeat for the recommended amount of repetitions.  Variations: You can perform this exercise with bands, barbells or cables. You can also use a single handle and work one side at a time.",
  },
  {
    name: "Standing dumbbell upright row",
    type: "strength",
    muscle: "traps",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Grasp a dumbbell in each hand with a pronated (palms forward) grip that is slightly less than shoulder width. The dumbbells should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position. Use your side shoulders to lift the dumbbells as you exhale. The dumbbells should be close to the body as you move it up and the elbows should drive the motion. Continue to lift them until they nearly touch your chin. Tip: Your elbows should drive the motion. As you lift the dumbbells, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement. Lower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement. Repeat for the recommended amount of repetitions.  Caution: Be very careful with how much weight you use in this exercise. Too much weight leads to bad form, which in turn can cause shoulder injury. I've seen this too many times so please no jerking, swinging and cheating. Also, if you suffer from shoulder problems, you may want to stay away from upright rows and substitute by some form of lateral raises. Variations: This exercise can also be performed using a straight bar attached to a low pulley and it can also be performed using an e-z bar.",
  },
  {
    name: "Kettlebell sumo deadlift high pull",
    type: "strength",
    muscle: "traps",
    equipment: "kettlebells",
    difficulty: "intermediate",
    instructions:
      "Place a kettlebell on the ground between your feet. Position your feet in a wide stance, and grasp the kettlebell with two hands. Set your hips back as far as possible, with your knees bent. Keep your chest and head up. This will be your starting position. Begin by extending the hips and knees, simultaneously pulling the kettlebell to your shoulders, raising your elbows as you do so. Reverse the motion to return to the starting position.",
  },
  {
    name: "Calf-Machine Shoulder Shrug",
    type: "strength",
    muscle: "traps",
    equipment: "machine",
    difficulty: "beginner",
    instructions:
      "Position yourself on the calf machine so that the shoulder pads are above your shoulders. Your torso should be straight with the arms extended normally by your side. This will be your starting position. Raise your shoulders up towards your ears as you exhale and hold the contraction for a full second. Slowly return to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can use dumbbells, barbells, smith machines and pulley machines to perform shrugging motions.",
  },
  {
    name: "Kettlebell sumo deadlift high pull",
    type: "strength",
    muscle: "traps",
    equipment: "kettlebells",
    difficulty: "intermediate",
    instructions:
      "Place a kettlebell on the ground between your feet. Position your feet in a wide stance, and grasp the kettlebell with two hands. Set your hips back as far as possible, with your knees bent. Keep your chest and head up. This will be your starting position. Begin by extending the hips and knees, simultaneously pulling the kettlebell to your shoulders, raising your elbows as you do so. Reverse the motion to return to the starting position.",
  },
  {
    name: "Calf-Machine Shoulder Shrug",
    type: "strength",
    muscle: "traps",
    equipment: "machine",
    difficulty: "beginner",
    instructions:
      "Position yourself on the calf machine so that the shoulder pads are above your shoulders. Your torso should be straight with the arms extended normally by your side. This will be your starting position. Raise your shoulders up towards your ears as you exhale and hold the contraction for a full second. Slowly return to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Variations: You can use dumbbells, barbells, smith machines and pulley machines to perform shrugging motions.",
  },
  {
    name: "Barbell shrug",
    type: "strength",
    muscle: "traps",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Stand up straight with your feet at shoulder width as you hold a barbell with both hands in front of you using a pronated grip (palms facing the thighs). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for a better grip. This will be your starting position. Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also rotate your shoulders as you go up, going in a semicircular motion from front to rear. However this version is not good for people with shoulder problems. In addition, this exercise can be performed with the barbell behind the back, with dumbbells by the side, a smith machine or with a shrug machine.",
  },
  {
    name: "Barbell behind-the-back shrug",
    type: "strength",
    muscle: "traps",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Stand up straight with your feet at shoulder width as you hold a barbell with both hands behind your back using a pronated grip (palms facing back). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for better grip. This will be your starting position. Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. The arms should remain stretched out at all times. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variations: You can also rotate your shoulders as you go up, going in a semicircular motion from rear to front. However this version is not good for people with shoulder problems. In addition, this exercise can be performed with the barbell in front of your thighs, with dumbbells by the side, a smith machine or with a shrug machine.",
  },
  {
    name: "Triceps dip",
    type: "strength",
    muscle: "triceps",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
  },
  {
    name: "Decline EZ-bar skullcrusher",
    type: "strength",
    muscle: "triceps",
    equipment: "e-z curl bar",
    difficulty: "advanced",
    instructions:
      "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well.",
  },
  {
    name: "Cable V-bar push-down",
    type: "strength",
    muscle: "triceps",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a straight cable bar attachment for different variations of the exercise. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises. Just like the Triceps Pushdown but with the V-Bar attachment.",
  },
  {
    name: "Weighted bench dip",
    type: "strength",
    muscle: "triceps",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "For this exercise you will need to place a bench behind your back and another one in front of you. With the benches perpendicular to your body, hold on to one bench on its edge with the hands close to your body, separated at shoulder width. Your arms should be fully extended. The legs will be extended forward on top of the other bench. Your legs should be parallel to the floor while your torso is to be perpendicular to the floor. Have your partner place the dumbbell on your lap. Note: This exercise is best performed with a partner as placing the weight on your lap can be challenging and cause injury without assistance. This will be your starting position. Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down. Using your triceps to bring your torso up again, lift yourself back to the starting position while exhaling. Repeat for the recommended amount of repetitions.  Caution: By placing your legs on top of another flat bench in front of you, the exercise becomes more challenging. It is best to attempt this exercise without any weights at first in order to get used to the movements required for good form. If that variation also becomes easy, then you can have a partner place plates on top of your lap. Make sure that in this case the partner ensures that the weights stay there throughout the movement.",
  },
  {
    name: "EZ-Bar Skullcrusher",
    type: "strength",
    muscle: "triceps",
    equipment: "e-z curl bar",
    difficulty: "intermediate",
    instructions:
      "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position. Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead. Lift the bar back to the starting position by extending the elbow and exhaling. Repeat.",
  },
  {
    name: "Reverse Grip Triceps Pushdown",
    type: "strength",
    muscle: "triceps",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "Start by setting a bar attachment (straight or e-z) on a high pulley machine. Facing the bar attachment, grab it with the palms facing up (supinated grip) at shoulder width. Lower the bar by using your lats until your arms are fully extended by your sides. Tip: Elbows should be in by your sides and your feet should be shoulder width apart from each other. This is the starting position. Slowly elevate the bar attachment up as you inhale so it is aligned with your chest. Only the forearms should move and the elbows/upper arms should be stationary by your side at all times. Then begin to lower the cable bar back down to the original staring position while exhaling and contracting the triceps hard. Repeat for the recommended amount of repetitions.  Variation: This exercise can also be performed with a single handle using one arm at a time. This will allow you to better isolate the triceps. With this version you can self spot yourself by placing your hand over your forearm and applying some pressure to help you perform more reps than before.",
  },
  {
    name: "Push-Ups - Close Triceps Position",
    type: "strength",
    muscle: "triceps",
    equipment: "body only",
    difficulty: "intermediate",
    instructions:
      "Lie on the floor face down and place your hands closer than shoulder width for a close hand position. Make sure that you are holding your torso up at arms' length. Lower yourself until your chest almost touches the floor as you inhale. Using your triceps and some of your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations:  If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance.  See Also: Push-Up",
  },
  {
    name: "Kneeling cable triceps extension",
    type: "strength",
    muscle: "triceps",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "Place a bench sideways in front of a high pulley machine. Hold a straight bar attachment above your head with your hands about 6 inches apart with your palms facing down. Face away from the machine and kneel. Place your head and the back of your upper arms on the bench. Your elbows should be bent with the forearms pointing towards the high pulley. This will be your starting position. While keeping your upper arms close to your head at all times with the elbows in, press the bar out in a semicircular motion until the elbows are locked and your arms are parallel to the floor. Contract the triceps hard and keep this position for a second. Exhale as you perform this movement. Slowly return to the starting position as you breathe in. Repeat for the recommended amount of repetitions.  Variation: You can also perform this exercise with exercise bands.",
  },
  {
    name: "Single-arm cable triceps extension",
    type: "strength",
    muscle: "triceps",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      "With your right hand, grasp a single handle attached to the high-cable pulley using a supinated (underhand; palms facing up) grip. You should be standing directly in front of the weight stack. Now pull the handle down so that your upper arm and elbow are locked in to the side of your body. Your upper arm and forearm should form an acute angle (less than 90-degrees). You can keep the other arm by the waist and you can have one leg in front of you and the other one back for better balance. This will be your starting position. As you contract the triceps, move the single handle attachment down to your side until your arm is straight. Breathe out as you perform this movement. Tip: Only the forearms should move. Your upper arms should remain stationary at all times. Squeeze the triceps and hold for a second in this contracted position. Slowly return the handle to the starting position. Repeat for the recommended amount of repetitions and then perform the same movement with the other arm.  Variations: You can use exercise bands to perform this exercise.",
  },
  {
    name: "Treadmill",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "treadmill",
    difficulty: "beginner",
    instructions:
      "Start at an easy pace and increase the treadmill's speed to increase the intensity of your workout. You can also change the incline of the treadmill; a steeper incline will increase the intensity of your workout. Be care ful when stepping onto the machine. Make sure to use the safety clip.",
  },
  {
    name: "Exercise Bike",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "exercise bike",
    difficulty: "beginner",
    instructions:
      "Start at an easy pace and increase your speed to increase the intensity of your workout. You can also change the resistance of the bike; a higher resistance will increase the intensity of your workout. Be care ful when getting onto the machine.",
  },
  {
    name: "Cross Trainer",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "cross trainer",
    difficulty: "beginner",
    instructions:
      "Start at an easy pace and increase the cross trainer's speed to increase the intensity of your workout. You can also change the resistance of the cross trainer; a higher resistance will increase the intensity of your workout. Be care ful when stepping onto the machine.",
  },
  {
    name: "Standing Hamstring Stretch",
    type: "stretching",
    muscle: "hamstrings",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "Stand tall with your feet hip-width apart, knees slightly bent, arms by your sides. Exhale as you bend forward at the hips, lowering your head toward the floor while keeping your head, neck, and shoulders relaxed. Wrap your arms around backs of your legs and hold anywhere from 45 seconds to 2 minutes. Bend your knees and roll up when you're done.",
  },
  {
    name: "Tricep Stretch",
    type: "stretching",
    muscle: "triceps",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "The triceps stretch—one of the most popular upper-body stretches. It loosens up the muscles on the back of your upper arms, making it great to do after a chest or shoulders workout. Kneel, sit, or stand tall with feet hip-width apart, arms extended overhead. Bend your right elbow and reach your right hand to touch the top middle of your back. Reach your left hand overhead and grasp just below your right elbow. Gently pull your right elbow down and toward your head. Switch arms and repeat.",
  },
  {
    name: "Butterfly Stretch",
    type: "stretching",
    muscle: "glutes",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "Sit tall on the floor with the soles of your feet together, knees bent out to sides. Hold onto your ankles or feet, engage your abs, and slowly lower your body toward your feet as far as you can while pressing your knees toward the floor. If you're too tight to bend over, simply press your knees down. Hold this stretch for 30 seconds to 2 minutes.",
  },
  {
    name: "Lunging Hip Flexor",
    type: "stretching",
    muscle: "quadriceps",
    equipment: "body only",
    difficulty: "beginner",
    instructions:
      "Kneel on your left knee. Place your right foot flat on the floor in front of you, knee bent. Lean forward, stretching your left hip toward the floor. Squeeze your butt; this will allow you to stretch your hip flexor even more. Hold for 30 seconds to 2 minutes. Switch sides and repeat.",
  },
];

exercises.forEach((exercise, index) => {
  return (exercise._id = index + 1);
});

module.exports = { exercises };
