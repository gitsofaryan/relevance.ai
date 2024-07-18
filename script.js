// script.js
const homeLink = document.getElementById('home-link');
const aiInteractionMonitoringLink = document.getElementById('ai-interaction-monitoring-link');
const guidedIndependentThinkingLink = document.getElementById('guided-independent-thinking-link');
const originalityVerificationLink = document.getElementById('originality-verification-link');
const educationalResourcesLink = document.getElementById('educational-resources-link');
const mainContent = document.getElementById('main-content');

homeLink.addEventListener('click', () => {
    mainContent.innerHTML = `
        <h1>Welcome to Relevant AI</h1>
        <p>Relevant AI is an innovative app designed to protect and enhance human creativity and cognition in the age of artificial intelligence.</p>
        <p>Our mission is to ensure that AI complements rather than replaces human creativity, empowering individuals to maintain their unique intellectual capabilities while benefiting from technological advancements.</p>
    `;
});

aiInteractionMonitoringLink.addEventListener('click', () => {
    mainContent.innerHTML = `
    <h1>AI Interaction Monitoring</h1>
    <table>
            <thead>
                <tr>
                    <th>AI Tool</th>
                    <th>Interaction Count</th>
                    <th>Last Interaction</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Google Assistant</td>
                    <td>10</td>
                    <td>2023-02-15</td>
                </tr>
                <tr>
                    <td>ChatGPT</td>
                    <td>5</td>
                    <td>2023-02-10</td>
                </tr>
                <tr>
                    <td>Deep Dream Generator</td>
                    <td>2</td>
                    <td>2023-02-05</td>
                </tr>
            </tbody>
        </table>
    `;
});

guidedIndependentThinkingLink.addEventListener('click', () => {
    mainContent.innerHTML = `
        <h1>Guided Independent Thinking</h1>
        <p>Receive personalized guidance to encourage independent thinking and develop your critical thinking skills.</p>
        <input type="text" id="thought-input" placeholder="Enter your thoughts">
        <button id="get-guidance-button">Get Guidance</button>
        <p id="guidance-output"></p>
    `;
    const thoughtInput = document.getElementById('thought-input');
    const getGuidanceButton = document.getElementById('get-guidance-button');
    const guidanceOutput = document.getElementById('guidance-output');

    getGuidanceButton.addEventListener('click', () => {
        const thought = thoughtInput.value;
        // Generate guidance output based on thought input
        guidanceOutput.innerText = 'Guidance willbe provided based on your input.';
    });
});

originalityVerificationLink.addEventListener('click', () => {
    mainContent.innerHTML = `
        <h1>Originality Verification</h1>
        <p>Verify the originality of your work and ensure that your creative output is authentic and not overly influenced by AI-generated content.</p>
        <input type="file" id="file-uploader">
        <button id="verify-button">Verify</button>
        <p id="verification-output"></p>
    `;
    const fileUploader = document.getElementById('file-uploader');
    const verifyButton = document.getElementById('verify-button');
    const verificationOutput = document.getElementById('verification-output');

    verifyButton.addEventListener('click', () => {
        const file = fileUploader.files[0];
        // Verify originality of uploaded file
        verificationOutput.innerText = 'Originality verification in progress...';
    });
});

educationalResourcesLink.addEventListener('click', () => {
    mainContent.innerHTML = `
        <h1>Educational Resources</h1>
        <p>Access a wealth of educational resources, including tutorials, workshops, and expert insights, to help you develop your creative and cognitive abilities.</p>
        <ul>
            <li>Creative Writing Workshop</li>
            <li>Critical Thinking Tutorial</li>
            <li>AI Ethics and Bias Course</li>
        </ul>
    `;
});
