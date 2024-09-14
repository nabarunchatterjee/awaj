const events = [
  {
    title: "Dead body found",
    time: "August 9, 2024",
    details:
      "Body of a second - year woman postgraduate medical student found at the seminar hall on the fourth floor of the emergency building of the State - run R.G.Kar Medical College and Hospital.No FIR is filed for 14 hours.",
    description: "",
  },
  {
    title: "First arrest made",
    time: "August 10, 2024",
    details:
      "Kolkata Police arrest a civic police volunteer Sanjay Roy in the alleged rape and murder case. The accused was a civic police volunteer since 2019 and engaged in Disaster Management Group of the police.",
    description: "",
  },
  {
    title: "Protests begin",
    time: "August 10, 2024",
    details:
      "Junior doctors, residents and paramedic staff organise protests in multiple medical colleges in the State, including RG Kar Medical College and Hospital, as West Bengal Chief Minister Mamata Banerjee vows to seek death penalty for the perpetrator",
    description: "",
  },
  {
    title: "Protests continue",
    time: "August 11, 2024",
    details:
      "Protests continue to rage. State government removes Sanjay Vashisth, the RG Kar Medical College and Hospital’s Medical Superintendent.Federation of Resident Doctors’ Association of India supports ongoing strike and calls for a nationwide halt of elective services in hospitals.",
    description: "",
  },
  {
    title: "Deadlines and Resignations ",
    time: "August 12, 2024",
    details:
      "West Bengal CM Mamata Banerjee gives the police seven - day deadline to make progress in the case. Principal of R.G.Kar Medical College and Hospital, Dr.Sandip Ghosh resigns from his official post.",
    description: "",
  },
  {
    title: "More protests",
    time: "August 12, 2024",
    details:
      "Government hospitals in Delhi, other parts of country begin indefinite strike as resident doctors call for transparent investigation into the case, requesting an immediate transfer to the CBI.Hospital services across West Bengal also remain disrupted disrupted as junior doctors, interns, and postgraduate trainees continue their strike.",
    description: "",
  },
  {
    title: "CBI takes over",
    time: "August 13, 2024",
    details:
      "Calcutta High Court transfers case to CBI, citing that no significant progress has been made in the investigation.NCW team visits R.G.Kar Medical College and Hospital.National Human Rights Commission also takes suo motu cognisance.",
    description: "",
  },
  {
    title: "Talk with protesters",
    time: "August 13, 2024",
    details:
      "While West Bengal government and the Calcutta High Court urge protesting doctors to resume services, Union Health Minister J.P.Nadda meets a delegation from the Indian Medical Association, assures doctors that Centre would bring in strict measures to ensure their safety at workplace",
    description: "",
  },
  {
    title: "Violence and vandalism",
    time: "August 14, 2024",
    details:
      "Violence erupts at R.G.Kar Medical College and Hospital late at night during a march organised by women to ‘Reclaim the Night’ protest. Mob breaks into hospital and vandalises the emergency building, protest venue.",
    description: "",
  },
  {
    title: "New details",
    time: "August 16, 2024",
    details:
      "Parents of the victim tell CBI that a few interns and physicians of hospital were involved in the crime.CBI summons one house staff, two post - graduate trainees who were on duty with the doctor on that night when she was murdered.",
    description: "",
  },
  {
    title: "FIR memorandum",
    time: "August 16, 2024",
    details:
      "Union Health Ministry issues memorandum that heads of institutions will be responsible for filing an institutional FIR within six hours of an incident of violence against any healthcare worker on duty.",
    description: "",
  },
  {
    title: "CM's march",
    time: "August 16, 2024",
    details:
      "Opposition parties in West Bengal amp up the protests against the Trinamool Congress government and Chief Minister Mamata Banerjee as Ms.Banerjee leads a protest rally in Kolkata, demanding justice for the victim.",
    description: "",
  },
  {
    title: "CBI probes case ",
    time: "August 17, 2024",
    details:
      "Doctors participate in a 24 - hour strike.CBI visits the fourth battalion barrack of Kolkata Police where the accused Sanjoy Roy was staying on the day of the crime, as well as his family’s residence.West Bengal government announces workplace safety measures for women.",
    description: "",
  },
  {
    title: "Amping up",
    time: "August 18, 2024",
    details:
      "Supreme Court takes suo motu cognisance of the case. As Kolkata Police issue prohibitory orders around R.G.Kar hospital, Union Home Ministry asks all State police forces to provide situation reports every two hours.Meanwhile, West Bengal Health Department revokes transfer order of 42 doctors.State Governor C.V.Ananda Bose calls “an emergency meeting of a cross - section of Bengal society” to apprise them of the action taken.",
    description: "",
  },
  {
    title: "Financial irregularities",
    time: "August 19, 2024",
    details:
      "A Special Investigation Team is set up to probe financial irregularities at R.G.Kar since 2021. Kolkata Police registers a case against former principal Sandip Ghosh.In Kolkata, hundreds of doctors march to the Lalbazar, the headquarters of the Kolkata police, along with two senior physicians who were summoned by the police for allegedly revealing the identity of the victim.",
    description: "",
  },
  {
    title: "National Task Force",
    time: "August 20, 2024",
    details:
      "The court constitutes a National Task Force to work out safety measures for medical professionals.Kolkata police books former principal Sandip Ghosh for allegations of corruption and irregularities.",
    description: "",
  },
  {
    title: "Protests rage",
    time: "August 21, 2024",
    details:
      "Twelve days after the rape and murder of a doctor at the R.G.Kar Medical College and Hospital, there is in no let - up in the protests, with over a dozen rallies organised across Kolkata.West Bengal Governor C.V.Ananda Bose visits the residence of the victim and meets her family.CBI questions former principal of the hospital Sandip Ghosh for the fifth consecutive day.",
    description: "",
  },
  {
    title: "Some protests cease",
    time: "August 22, 2024",
    details:
      "Federation of All India Medical Association decides to end its 11 - day strike.West Bengal government removes three senior officials of the R.G.Kar hospital, bowing to the demand of junior doctors.West Bengal Chief Minister Mamata Banerjee writes to Prime Minister Narendra Modi calling for a central legislation for speedy justice in cases of sexual assault.",
    description: "",
  },
  {
    title: "Roy sent to judicial custody",
    time: "August 23, 2024",
    details:
      "Prime accused Sanjay Roy sent to judicial custody till September 6. Calcutta High Court transfers the probe into allegations of corruption involving former principal of the R.G.Kar Medical College and Hospital, to the CBI.",
    description: "",
  },
  {
    title: "Lie tests",
    time: "August 24, 2024",
    details:
      "CBI conducts polygraph tests on seven -- the former principal of the medical college Sandip Kumar Ghosh, four doctors who had dinner with the victim hours before the crime, prime accused Sanjay Roy, and another police volunteer believed to be close to him.",
    description: "",
  },
  {
    title: "CBI's FIR",
    time: "August 24, 2024",
    details:
      "CBI’s anti corruption branch registers an FIR against Mr.Ghosh, accusing him of financial irregularities.The agitation against the rape and murder continues in Kolkata, with residents and supporters of Left parties alike protesting in the city.",
    description: "",
  },
  {
    title: "CBI searches",
    time: "August 25, 2024",
    details:
      "CBI searches the residences of former principal of R.G. Kar MCH Sandip Kumar Ghosh and other officials, including the home of Sanjay Vashisth, former superintendent of the hospital.These searches and raids were part of the CBI’s investigation into allegations of financial irregularities involving Dr.Ghosh. Resident doctors at the R.G.Kar Hospital vow to continue their strike. Prohibitory orders near R.G.Kar extended for one more week till August 31",
    description: "",
  },
  {
    title: "Another lie test",
    time: "August 26, 2024",
    details:
      "CBI starts a second round of polygraph tests on former R.G. Kar Medical College and Hospital principal Sandip Ghosh and five others and grills Dr.Ghosh and Vashisth about alleged financial irregularities in the institute.",
    description: "",
  },
  {
    title: "ED files case ",
    time: "August 27, 2024",
    details:
      "Violence erupts during the ‘March to Nabanna’ in which protesters demanded Banerjee's resignation. BJP calls for a 12-hour bandh in the State.Meanwhile, ED files a money laundering case to probe alleged financial irregularities at the R.G.Kar during the tenure of its former principal Sandip Ghosh.",
    description: "",
  },
  {
    title: "Audio clips",
    time: "August 30, 2024",
    details:
      "Audio clips surface that are alleged conversations between hospital staff and the victim's parents. In one of these calls, the hospital staff is heard suggesting that the victim may have killed herself.",
    description: "",
  },
  {
    title: "Ghosh arrested",
    time: "September 3, 2024",
    details:
      "The CBI arrests R.G.Kar Medical College and Hospital’s ex - principal Sandip Ghosh, two vendors and one security official.",
    description: "",
  },
  {
    title: "A spine for a gift",
    time: "September 3, 2024",
    details:
      "A delegation of junior doctors met Kolkata Police Commissioner Vineet Goyal and demanded his resignation.They gifted him a replica of a human spine.",
    description: "",
  },
  {
    title: "Aparajita Billa",
    time: "September 4, 2024",
    details:
      "The West Bengal government passes the Aparajita Bill.The Bill lays down capital punishment(life imprisonment or death penalty) as the punishment for rape.",
    description: "",
  },
  {
    title: "Hush money",
    time: "September 4, 2024",
    details:
      "The victim's parents and family members, who joined protests at the hospital, alleged that the police had offered them money even as the body of their daughter was lying at home.",
    description: "",
  },
  {
    title: "Nasty posts",
    time: "September 5, 2024",
    details:
      "Following nasty posts about the victim on social media, the Supreme Court directed the CBI to file a report by September 18. The CBI requested the State police to also look into the posts.",
    description: "",
  },
  {
    title: "Close aide detained",
    time: "September 6, 2024",
    details:
      "Enforcement Directorate officials detain Prashun Chatterjee, a close aide of former principal of Kolkata’s RG Kar Medical College Sandip Ghosh. The BJP holds another protest.",
    description: "",
  },
  {
    title: "Suspicious renovation",
    time: "September 6, 2024",
    details:
      "A letter asking for immediate renovation of the hospital's on-duty doctors' rooms and separate attached toilets a day after the crime surfaced online.It had the Ghosh's signature and was addressed to the Public Works Department, raising the question of evidence tampering.",
    description: "",
  },
  {
    title: "Criminal nexus",
    time: "September 7, 2024",
    details:
      "The CBI said Ghosh, two vendors and a security guard formed a criminal nexus, where Ghosh favoured persons for awarding contracts for a cafe a hospital supplies.This is related to the financial irregularities case against Ghosh.",
    description: "",
  },
  {
    title: "Fresh report",
    time: "September 9, 2024",
    details:
      "The Supreme Court asks the CBI to file a fresh status report by September 17 and asks protesting doctors to return to work",
    description: "",
  },
  {
    title: "CM's money offer",
    time: "September 9, 2024",
    details: "The victim's mother says that the CM offered the family money",
    description: "",
  },
  {
    title: "Controversial Pujo call",
    time: "September 9, 2024",
    details:
      "The CM calls for protesting doctors to stop protests and take part in Durga Puja celebrations. This sparks criticism from opposition political parties.",
    description: "",
  },
  {
    title: "Middle ground",
    time: "September 12, 2024",
    details:
      "The government agrees to meet the protesting doctors.However, they refuse a live telecast of the procedure and allow only 15 doctors against the 30 the doctors had wanted.",
    description: "",
  },
  {
    title: "Impasse",
    time: "September 13, 2024",
    details:
      "In a 4-page letter, the doctors seek the intervention of PM Modi and President Murmu to break the impasse",
    description: "",
  },
];

export default events;
