const fillers = {
    customer: ["Vivian", "The woman", "Professor", "Michael", "Sebastian", "The dog", "Ronin", "The special one", "An unknown person", "The banished", "$customer and $customer", "$customer, $customer, and $customer"],
    offers: ["$pre$post $type", "$pre$post $type and $pre$post $type", "$pre$post $type, $pre$post $type, and more..."],
    pre: ["Moca", "Poke", "Dio", "Jasp", "Maki", "Bono"],
    post: ["mase", "ponner", "stie","cron", "wok", "lan", "len"],
    ing1: ["vegetables", "onions", "carrots", "spring onions", "tomatoes"],
    ing2: ["pasta", "rice", "bread", "noodles", "buns", "burgers", "fries", "vegetables", "$ing2 and $ing2", "$ing2, $ing2, and $ing2", "$ing2 and a little bit of $ing2"],
    ing3: ["vinegar", "soy sauce", "ranch", "ketchup", "salt"],
    place: ["fridge", "blender", "microwave", "freezer", "oven"],
    num: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "$num$num"],
    time: ["seconds", "minutes", "hours"],
    action: ["mix", "cook", "combine", "fry", "stir"],
    dish: ["bowl", "cup", "jar", "grate", "box", "bag", "$dish or $dish"],
    name: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    type: ["special", "dish", "meal", "combo"],
  };
  
  const template = `Welcome to Aidan's Diner. Today's offering(s): $offers
  
  $customer would like a $pre$post $type! Follow the recipe below to make it:

  1. Prepare some $ing1 and put it in the $place for $num $time.
  2. Let it sit for $num $time, then $action it with some $ing2.
  3. Add some $ing3 and serve in a $dish.
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
