document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    
    // personal details
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    // gender
    const selectedGender = document.querySelector('input[name="gender"]:checked');
        
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const occupation = document.getElementById('occupation').value;
    const em_no = document.getElementById('emergency-contact').value;


    // complaint
    const concern = document.getElementById('concern').value;
    // days of problem
    const durationDays = document.getElementById("duration-days");
    const durationWeeks = document.getElementById("duration-weeks");
    const durationMonths = document.getElementById("duration-months");
    const durationYears = document.getElementById("duration-years");
    let selectedDurations = [];
    if (durationDays.checked) {
        selectedDurations.push("Days");
    }
    if (durationWeeks.checked) {
        selectedDurations.push("Weeks");
    }
    if (durationMonths.checked) {
        selectedDurations.push("Months");
    }
    if (durationYears.checked) {
        selectedDurations.push("Years");
    }
    // specidic injury
    const incidentYes = document.getElementById("incident-yes");
    const incidentNo = document.getElementById("incident-no");
    const incidentDetails = document.getElementById("incident-details");
    let incidentAnswer = "";
    if (incidentYes.checked) {
        incidentAnswer = "Yes";
    } else if (incidentNo.checked) {
        incidentAnswer = "No";
    }

    // Get additional details if "Yes" is selected
    let incidentExplanation = "";
    if (incidentYes.checked) {
        incidentExplanation = incidentDetails.value.trim();
    }

    // pain 
    const painRating = document.getElementById('pain-rating').value;
    // pain type
    const painSharp = document.getElementById("pain-sharp");
    const painDull = document.getElementById("pain-dull");
    const painAching = document.getElementById("pain-aching");
    const painBurning = document.getElementById("pain-burning");
    const painTingling = document.getElementById("pain-tingling");
    const painOther = document.getElementById("pain-other");
    const painOtherText = document.getElementById("pain-other-text");
    // Gather selected pain types
    let selectedPainTypes = [];
    if (painSharp.checked) selectedPainTypes.push("Sharp");
    if (painDull.checked) selectedPainTypes.push("Dull");
    if (painAching.checked) selectedPainTypes.push("Aching");
    if (painBurning.checked) selectedPainTypes.push("Burning");
    if (painTingling.checked) selectedPainTypes.push("Tingling");
    // Add "Other" if checked and has value
    if (painOther.checked && painOtherText.value.trim() !== "") {
        selectedPainTypes.push(`Other: ${painOtherText.value.trim()}`);
    }

    // pain occur time
    const painMorning = document.getElementById("pain-morning");
    const painDuringActivity = document.getElementById("pain-during-activity");
    const painAfterActivity = document.getElementById("pain-after-activity");
    const painNight = document.getElementById("pain-night");
    const painConstant = document.getElementById("pain-constant");
    // Gather selected pain occurrence times
    let painOccurrence = [];
    if (painMorning.checked) painOccurrence.push("Morning");
    if (painDuringActivity.checked) painOccurrence.push("During activity");
    if (painAfterActivity.checked) painOccurrence.push("After activity");
    if (painNight.checked) painOccurrence.push("Night");
    if (painConstant.checked) painOccurrence.push("Constant");

    // pain redidate to other areas
    const painRadiatesYes = document.getElementById("pain-radiates-yes");
    const painRadiatesNo = document.getElementById("pain-radiates-no");
    const radiatesLocation = document.getElementById("pain-radiates-location");
    // Initialize variables
    let painRadiates = "";
    let radiatesLocationText = "";
    // Check which checkbox is selected
    if (painRadiatesYes.checked) {
        painRadiates = "Yes";
        radiatesLocationText = radiatesLocation.value.trim() || "Not specified";
    } else if (painRadiatesNo.checked) {
        painRadiates = "No";
    }

    // medical history
    // checkbox for medical history
    const treatmentYes = document.getElementById("treatment-yes");
    const treatmentNo = document.getElementById("treatment-no");
    const treatmentDetails = document.getElementById("treatment-details");
    // Initialize variables
    let previousTreatment = "";
    let treatmentDescription = "";
    // Check which checkbox is selected
    if (treatmentYes.checked) {
        previousTreatment = "Yes";
        treatmentDescription = treatmentDetails.value.trim() || "Not specified";
    } else if (treatmentNo.checked) {
        previousTreatment = "No";
    }

    // any other medical condition
    function getConditionData() {
        const conditions = [];
        // Checkboxes with fixed conditions
        if (document.getElementById("condition-hbp").checked) conditions.push("High Blood Pressure");
        if (document.getElementById("condition-diabetes").checked) conditions.push("Diabetes");
        if (document.getElementById("condition-asthma").checked) conditions.push("Asthma");
        if (document.getElementById("condition-heart").checked) conditions.push("Heart Disease");
        if (document.getElementById("condition-arthritis").checked) conditions.push("Arthritis");
        if (document.getElementById("condition-osteoporosis").checked) conditions.push("Osteoporosis");
        if (document.getElementById("condition-neuro").checked) conditions.push("Neurological Disorders");
        // Check for surgeries and details
        if (document.getElementById("condition-surgeries").checked) {
            const surgeryDetails = document.getElementById("condition-surgeries-details").value.trim();
            conditions.push(`Recent Surgeries: ${surgeryDetails || "Details not provided"}`);
        }
        // Check for other conditions and details
        if (document.getElementById("condition-other").checked) {
            const otherDetails = document.getElementById("condition-other-details").value.trim();
            conditions.push(`Other: ${otherDetails || "Details not provided"}`);
        }
        return conditions;
    }
    const conditions = getConditionData();
    
    // currently taking medication
    const medicationsYes = document.getElementById("medications-yes");
    const medicationsNo = document.getElementById("medications-no");
    const medicationsList = document.getElementById("medications-list");
    // Initialize variables
    let medicationStatus = "";
    let medicationDetails = "";
    // Check which checkbox is selected
    if (medicationsYes.checked) {
        medicationStatus = "Yes";
        medicationDetails = medicationsList.value.trim() || "Not specified";
    } else if (medicationsNo.checked) {
        medicationStatus = "No";
    }

    // allergies
    const allergiesYes = document.getElementById("allergies-yes");
    const allergiesNo = document.getElementById("allergies-no");
    const allergiesList = document.getElementById("allergies-list");

    // Initialize variables
    let hasAllergies = "";
    let allergyDetails = "";

    // Check which checkbox is selected
    if (allergiesYes.checked) {
        hasAllergies = "Yes";
        allergyDetails = allergiesList.value.trim() || "Not specified";
    } else if (allergiesNo.checked) {
        hasAllergies = "No";
    }

    // lifestyle and functional assesment
    // physical activity level
    const activitySedentary = document.getElementById("activity-sedentary");
    const activityLight = document.getElementById("activity-light");
    const activityModerate = document.getElementById("activity-moderate");
    const activityIntense = document.getElementById("activity-intense");
    // Initialize variable for activity level
    let activityLevel = [];
    // Check which checkboxes are selected
    if (activitySedentary.checked) activityLevel.push("Sedentary");
    if (activityLight.checked) activityLevel.push("Light");
    if (activityModerate.checked) activityLevel.push("Moderate");
    if (activityIntense.checked) activityLevel.push("Intense");

    // exercise regularly
    const exerciseYes = document.getElementById("exercise-yes");
    const exerciseNo = document.getElementById("exercise-no");
    const exerciseDetails = document.getElementById("exercise-details");

    // Initialize variables
    let regularExercise = "";
    let exerciseDescription = "";

    // Check which checkbox is selected
    if (exerciseYes.checked) {
        regularExercise = "Yes";
        exerciseDescription = exerciseDetails.value.trim() || "Details not provided";
    } else if (exerciseNo.checked) {
        regularExercise = "No";
    }

    // smoke
    const smokeYes = document.getElementById("smoke-yes");
    const smokeNo = document.getElementById("smoke-no");
    const smokePerDay = document.getElementById("smoke-per-day");
    // Initialize variables
    let smokerStatus = "";
    let cigarettesPerDay = "";
    // Check which checkbox is selected
    if (smokeYes.checked) {
        smokerStatus = "Yes";
        cigarettesPerDay = smokePerDay.value.trim() || "Not specified";
    } else if (smokeNo.checked) {
        smokerStatus = "No";
    }

    // alchodol
    const alcoholYes = document.getElementById("alcohol-yes");
    const alcoholNo = document.getElementById("alcohol-no");
    const alcoholFrequency = document.getElementById("alcohol-frequency");

    // Initialize variables
    let alcoholConsumption = "";
    let consumptionFrequency = "";

    // Check which checkbox is selected
    if (alcoholYes.checked) {
        alcoholConsumption = "Yes";
        consumptionFrequency = alcoholFrequency.value.trim() || "Not specified";
    } else if (alcoholNo.checked) {
        alcoholConsumption = "No";
    }

    // any condtion affected your daily activity
    const conditionYes = document.getElementById("condition-yes");
    const conditionNo = document.getElementById("condition-no");
    const conditionDetails = document.getElementById("condition-details");

    // Initialize variables
    let conditionEffect = "";
    let conditionExplanation = "";

    // Check which checkbox is selected
    if (conditionYes.checked) {
        conditionEffect = "Yes";
        conditionExplanation = conditionDetails.value.trim() || "Not specified";
    } else if (conditionNo.checked) {
        conditionEffect = "No";
    }

    // physical assesment
    const posture = document.getElementById('posture').value;
    const motion = document.getElementById('rom').value;
    const strength = document.getElementById('strength').value;
    const gait = document.getElementById('gait').value;
    const special = document.getElementById('special-tests').value;

    // goal and expectations
    const goal = document.getElementById('goals').value;
    const additional = document.getElementById('additional-info').value;

    // signature
    const patientSignature = document.getElementById("patient-signature").value || "_______________________";
    const signatureDate = document.getElementById("signature-date").value || "Not provided";
    const physioSignature = document.getElementById("physio-signature").value || "____________________________";

    // strucute of output 
    let output = `
    <div class="card shadow-lg border-0">
        <div class="card-header bg-primary text-white text-center">
            <h3 class="mb-0">📋 Patient Medical History</h3>
        </div>
        <div class="card-body p-4">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-primary">Personal Information</h5>
                    <ul class="list-group mb-4">
                        <li class="list-group-item"><strong>Name:</strong> ${name}</li>
                        <li class="list-group-item"><strong>Gender:</strong> ${selectedGender.value}</li>
                        <li class="list-group-item"><strong>Age:</strong> ${age}</li>
                        <li class="list-group-item"><strong>Phone Number:</strong> ${phone}</li>
                        <li class="list-group-item"><strong>Address:</strong> ${address}</li>
                        <li class="list-group-item"><strong>Email:</strong> ${email}</li>
                        <li class="list-group-item"><strong>Occupation:</strong> ${occupation}</li>
                        <li class="list-group-item"><strong>Emergency Contact:</strong> ${em_no}</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h5 class="text-primary">Medical Information</h5>
                    <ul class="list-group mb-4">
                        <li class="list-group-item"><strong>Chief Concern:</strong> ${concern}</li>
                        <li class="list-group-item"><strong>Duration of Issue:</strong> ${
                            selectedDurations.join(", ") || "None selected"
                        }</li>
                        <li class="list-group-item"><strong>Specific Incident or Injury:</strong> ${
                            incidentAnswer || "Not specified"
                        }</li>`;
    
    if (incidentAnswer === "Yes") {
        output += `<li class="list-group-item"><strong>Incident Details:</strong> ${
            incidentExplanation || "No details provided"
        }</li>`;
    }

    output += `
                        <li class="list-group-item"><strong>Pain Rating:</strong> ${painRating}</li>
                        <li class="list-group-item"><strong>Pain Types:</strong> ${
                            selectedPainTypes.length > 0 ? selectedPainTypes.join(", ") : "None selected"
                        }</li>
                        <li class="list-group-item"><strong>Pain Occurrence:</strong> ${
                            painOccurrence.length > 0 ? painOccurrence.join(", ") : "Not specified"
                        }</li>
                        <li class="list-group-item"><strong>Radiating Pain:</strong> ${
                            painRadiates || "Not specified"
                        }</li>`;
    
    if (painRadiates === "Yes") {
        output += `<li class="list-group-item"><strong>Radiation Areas:</strong> ${radiatesLocationText}</li>`;
    }

    output += `
                        <li class="list-group-item"><strong>Previous Treatment:</strong> ${
                            previousTreatment || "Not specified"
                        }</li>`;
    
    if (previousTreatment === "Yes") {
        output += `<li class="list-group-item"><strong>Treatment Details:</strong> ${treatmentDescription}</li>`;
    }
    
    if (conditions.length > 0) {
        conditions.forEach((condition) => {
            output += `<li class="list-group-item"><strong>Other Problem:</strong> ${condition}</li>`;
        });
    } else {
        output += `<li class="list-group-item"><strong>Conditions:</strong> None selected</li>`;
    }
    
    output += `
                        <li class="list-group-item"><strong>Medications:</strong> ${
                            medicationStatus === "Yes"
                                ? `${medicationDetails || "Not specified"}`
                                : medicationStatus || "Not specified"
                        }</li>
                        <li class="list-group-item"><strong>Allergies:</strong> ${
                            hasAllergies === "Yes"
                                ? `${allergyDetails || "Not specified"}`
                                : hasAllergies || "Not specified"
                        }</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h5 class="text-primary">Lifestyle Information</h5>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Physical Activity Level:</strong> ${
                            activityLevel.length > 0 ? activityLevel.join(", ") : "Not specified"
                        }</li>
                        <li class="list-group-item"><strong>Exercise Regularly:</strong> ${
                            regularExercise || "Not specified"
                        }</li>`;
    
    if (regularExercise === "Yes") {
        output += `<li class="list-group-item"><strong>Exercise Details:</strong> ${exerciseDescription}</li>`;
    }
    
    output += `
                        <li class="list-group-item"><strong>Smoking:</strong> ${
                            smokerStatus === "Yes"
                                ? `${cigarettesPerDay || "Not specified"} cigarettes/day`
                                : smokerStatus || "Not specified"
                        }</li>
                        <li class="list-group-item"><strong>Alcohol Consumption:</strong> ${
                            alcoholConsumption === "Yes"
                                ? `${consumptionFrequency || "Not specified"}`
                                : alcoholConsumption || "Not specified"
                        }</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h5 class="text-primary">Additional Information</h5>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Condition Affects Activities:</strong> ${
                            conditionEffect === "Yes"
                                ? `${conditionExplanation || "Not specified"}`
                                : conditionEffect || "Not specified"
                        }</li>
                        <li class="list-group-item"><strong>Goals for Physiotherapy:</strong> ${goal}</li>
                        <li class="list-group-item"><strong>Additional Information:</strong> ${
                            additional || "None provided"
                        }</li>
                    </ul>
                </div>
            </div>
            <div></div>
            <h5 class="text-primary">Signatures</h5>
            <ul class="list-group mb-4">
                <li class="list-group-item"><strong>Patient Signature:</strong> ${patientSignature}</li>
                <li class="list-group-item"><strong>Date:</strong> ${signatureDate}</li>
                <li class="list-group-item"><strong>Physiotherapist Name/Signature:</strong> ${physioSignature}</li>
            </ul>
        </div>
    </div>`;
    // display
    document.getElementById('form-results').innerHTML = output;

    // pdf
    function downloadPDF() {
        const element = document.querySelector(".card");
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF("p", "mm", "a4");
    
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("Submitted_Form_Data.pdf");
        });
    }
    
    // Attach the downloadPDF function to the button's click event
    document.getElementById("download-btn").addEventListener("click", downloadPDF);


})
