 var options = [
         { 
          	a: "I",
          	aText : "Introversion",
          	aTip : "The Introvert is “territorial” and desires space and solitude to recover energy.  Introverts enjoy solitary activities such as reading and meditating.  25% of the population.",
          	b: "E",
          	bText:"Extraversion",
          	bTip:"The Extravert is “sociable” and is energized by the presence of other people.  Extraverts experience loneliness when not in contact with others.  75% of the population.",
        } ,
        {
            a : "N",
            aText : "Intuition",
              aTip : "The “intuitive” person bases their lives on predictions and ingenuity.  They consider the future and enjoy planning ahea  25% of the population.",
              b : "S",
              bText : "Sensing",
              bTip : "The “sensing” person bases their life on facts, thinking primarily of their present situation.  They are realistic and practical.  75% of the population.",
       },
       {
              a : "T",
              aText : "Thinking",
              aTip : "The “thinking” person bases their decisions on facts and without personal bias.  They are more comfortable with making impersonal judgments.  50% of the population.",
              b : "F",
              bText : "Feeling",
              bTip : "The “feeling” person bases their decisions on personal experience and emotion.  They make their emotions very visible.  50% of the population.",
        },
       	{
              a : "J",
              aText : "Judgment",
              aTip : "The “judging” person enjoys closure.  They establish deadlines and take them seriously.  They despise being late.  50% of the population.",
              b : "P",
              bText : "Perception",
              bTip : "The “perceiving” person likes to keep options open and flui  They have little regard for deadlines.  Dislikes making decisions unless they are completely sure they are right.  50% of the population.",
          }		
];
var results = [
      { "key": "INTJ", "score": 0, "text": "INTJ: Scientist\nThe most self-confident of all types.  They focus on possibilities and use empirical logic to think about the future.  They prefer that events and people serve some positive use.  1% of population."},
      { "key":  "INTP", "score": 0, "text": "INTP: Architect\nAn architect of ideas, number systems, computer languages, and many other concepts.  They exhibit great precision in thought and language.  1% of the population."},
      { "key":  "INFJ", "score": 0, "text": "INFJ: Author\nFocus on possibilities.  Place emphasis on values and come to decisions easily.  They have a strong drive to contribute to the welfare of others.  1% of population."},
      { "key":  "INFP", "score": 0, "text": "INFP: Questor\nPresent a calm and pleasant face to the worl  Although they seem reserved, they are actually very idealistic and care passionately about a few special people or a cause.  1% of the population."},
      { "key":  "ISTJ", "score": 0, "text": "ISTJ: Trustee\nISTJs like organized lives. They are dependable and trustworthy, as they dislike chaos and work on a task until completion. They prefer to deal with facts rather than emotions. 6% of the population."},
      { "key":  "ISTP", "score": 0, "text": "ISTP: Artisan\nISTPs are quiet people who are very capable at analyzing how things work. Though quiet, they can be influential, with their seclusion making them all the more skille 17% of the population."},
      { "key":  "ISFJ", "score": 0, "text": "ISFJ: Conservator\nISFJs are not particularly social and tend to be most concerned with maintaining order in their lives. They are dutiful, respectful towards, and interested in others, though they are often shy. They are, therefore, trustworthy, but not bossy. 6% of the population."},
      { "key":  "ISFP", "score": 0, "text": "ISFP: Author\nFocus on possibilities.  Place emphasis on values and come to decisions easily.  They have a strong drive to contribute to the welfare of others.  1% of population."},
      { "key":  "ENTJ", "score": 0, "text": "ENTJ: Fieldmarshal\nThe driving force of this personality is to lea  They like to impose structure and harness people to work towards distant goals.  They reject inefficiency.  5% of the population."},
      { "key":  "ENTP", "score": 0, "text": "ENTP: Inventor\nExercise their ingenuity by dealing with social, physical, and mechanical relationships.  They are always sensitive to future possibilities.  5% of the population."},
      { "key":  "ENFJ", "score": 0, "text": "ENFJ: Pedagogue\nExcellent leaders, they are charismatic and never doubt that others will follow them and do as they ask.   They place a high value on cooperation.  5% of the population." },
      { "key":  "ENFP", "score": 0, "text": "ENFP: Journalist\nPlace significance in everyday occurrences.  They have great ability to understand the motives of others.  They see life as a great drama.  They have a great impact on others.  5% of the population."},
      { "key":  "ESTJ", "score": 0, "text": "ESTJ: Administrator\nESTJs are pragmatic, and thus well-suited for business or administrative roles. They are traditionalists and conservatives, believing in the status quo. 13% of the population."},
      { "key":  "ESTP", "score": 0, "text": "ESTP: Promoter\nESTPs tend to manipulate others in order to attain access to the finer aspects of life. However, they enjoy heading to such places with others. They are social and outgoing and are well-connected. 13% of the population."},
      { "key":  "ESFJ", "score": 0, "text": "ESFJ: Seller\nESFJs tend to be social and concerned for others. They follow tradition and enjoy a structured community environment. Always magnanimous towards others, they expect the same respect and appreciation themselves. 13% of the population."},
      { "key":  "ESFP", "score": 0, "text": "ESFP: Entertainer\nThe mantra of the ESFP would be \"Carpe Diem.\" They enjoy life to the fullest. They do not, thus, like routines and long-term goals. In general, they are very concerned with others and tend to always try to help others, often perceiving well their needs. 13% of the population."},
        
      ];