const projects = {
    road: {
        title: 'Road Accident Dashboard',
        type: 'Power BI · Business Intelligence',

        problem:
            'The project was designed to make road accident information easier to analyse by bringing accident patterns, casualties and contributing factors into an interactive reporting environment.',

        data:
            'The dashboard works with road accident data covering casualties, vehicles, accident severity, road conditions, road type, light conditions, day and other accident-related dimensions.',

        approach:
            'The data was prepared for analysis in Power BI and transformed into an interactive dashboard. KPI cards provide an overall view while charts allow accident patterns to be examined across different dimensions.',

        model:
            'Power BI data modelling and analytical measures were used to structure the report and support the dashboard calculations. This is a descriptive and diagnostic analytics project rather than a predictive machine-learning model.',

        results: [
            '418K casualties are surfaced as a headline KPI in the displayed dashboard.',
            '563K vehicles are represented in the displayed analysis.',
            'Friday has the highest daily casualty count in the displayed analysis.',
            'Cars account for the largest share of casualties among the vehicle types shown.',
            'Daylight accounts for 72.98% of casualties in the displayed light-condition analysis.'
        ],

        deployment:
            'The completed report is delivered as an interactive Power BI dashboard. The PBIX file is available in the GitHub repository for further exploration in Power BI Desktop.',

        tools:
            'Power BI · Data preparation · Data visualization · KPI design · Interactive filtering',

        files: 'Road Accident Dashboard.pbix',
        github: 'Akanimo619/Road-Accident-Dashboard'
    },

    sales: {
        title: 'Sales Report Analysis',
        type: 'Power BI · Business Intelligence',

        problem:
            'The project was developed to provide a structured view of sales performance across products, employees, zones and branches instead of relying only on raw sales records.',

        data:
            'The analysis uses sales information organised around products, employees, branches and zones, with measures including sales amount, quantity ordered and sales price.',

        approach:
            'The report was organised into dedicated views for overall sales performance, employee performance, product sales, and zones and branches. Interactive Power BI visualisations allow the user to move from an overall view into more detailed performance analysis.',

        model:
            'Power BI data modelling was combined with DAX measures and Power Query-based data preparation. Interactive slicers and report-level visualisations support the analytical workflow.',

        results: [
            'Total sales amount is approximately $34.6M in the displayed report.',
            'Total quantity ordered is approximately 893K.',
            'Total sales price is approximately $30.8M.',
            'Modern is the leading branch in the displayed branch analysis at approximately $13.8M.',
            'Elizabeth Banks leads the displayed employee ranking at approximately $5.0M.',
            'Augmentin is the top product by sales amount at approximately $908.87K.'
        ],

        deployment:
            'The finished solution is delivered as a Power BI report. The PBIX file and report screenshots are stored in the GitHub repository for portfolio and project review.',

        tools:
            'Power BI · DAX · Power Query · Data modelling · Interactive slicers · Data visualization',

        files: 'Sales Report Analysis.pbix',
        github: 'Akanimo619/Sales-Report-Analysis'
    },

    product: {
        title: 'Product Sales Analysis',
        type: 'Tableau · Business Intelligence',

        problem:
            'The project was designed to provide a clear view of product sales performance by connecting revenue, cost and profit with time, product categories and geography.',

        data:
            'The Tableau workbook uses an Excel sales source containing 10,000 records and fields covering dates, customer demographics, geography, product information, order quantities, unit cost, unit price, revenue, cost and profit.',

        approach:
            'The analysis combines KPI cards with revenue trends, product-category profitability and country-level profitability. Separate Tableau worksheets are combined into an interactive dashboard.',

        model:
            'The analytical model is based on Tableau calculated fields and aggregated measures for revenue, cost and profit. Time-based and geographic dimensions are used to compare business performance.',

        results: [
            'Revenue is 84,826,772 in the displayed dashboard.',
            'Cost is 52,780,533.',
            'Profit is 32,046,239.',
            'Revenue is analysed across yearly and monthly periods.',
            'Profitability is compared across product categories and countries.',
            'Product-level and category-level views provide additional profitability comparisons.'
        ],

        deployment:
            'The completed analysis is delivered as an interactive Tableau dashboard. The Tableau workbook is stored in the GitHub repository and can be opened in Tableau Public or Tableau Desktop.',

        tools:
            'Tableau Public · Microsoft Excel · Calculated fields · KPI analysis · Time-series analysis · Geographic analysis · Data visualization',

        files: 'Product Sales.twb',
        github: 'Akanimo619/Product-Sales'
    },

    office: {
        title: 'Office Supply Analysis',
        type: 'Tableau · Business Intelligence',

        problem:
            'The project was developed to analyse office supply sales performance across products, payment channels, customer segments and time periods while bringing the major business measures into one interactive dashboard.',

        data:
            'The analysis uses Office Supply data containing fields such as Units Sold, Manufacturing Price, Sale Price, Date, Payment Channel, Product, Segment and State.',

        approach:
            'The dashboard combines headline revenue and cost KPIs with product, payment-channel, unit-sales, monthly and customer-segment analysis. State and quarter filters allow the user to explore different selections.',

        model:
            'Tableau calculated fields are used to derive Revenue, Cost and Profit. Revenue is calculated from Units Sold multiplied by Sale Price, while Cost is calculated from Manufacturing Price multiplied by Units Sold.',

        results: [
            'Total revenue is $6,983,336 in the displayed dashboard.',
            'Total cost is $7,277,985.',
            'Biro is the leading product by total revenue in the displayed view.',
            'Biro also leads the displayed total-units-sold comparison.',
            'Cash represents 38% of the payment-channel mix shown.',
            'The monthly revenue view shows its strongest point around October in the displayed period.'
        ],

        deployment:
            'The finished solution is delivered as a Tableau dashboard. The Tableau workbook is available in the GitHub repository for further exploration.',

        tools:
            'Tableau Public · Microsoft Excel · Calculated fields · KPI design · Sales analytics · Interactive filters · Data visualization',

        files: 'Office Supply Analysis.twb',
        github: 'Akanimo619/Office-Supply-Analysis'
    },

    vrinda: {
        title: 'Vrinda Store Sales Analysis',
        type: 'Tableau · E-commerce Analytics',

        problem:
            'The project was designed to provide a consolidated view of e-commerce sales performance, customer demographics, order status, sales channels and geographic performance.',

        data:
            'The Tableau workbook uses an Excel data source containing 10,000 records covering order information, customer demographics, gender, age groups, dates, order status, sales channels, products, quantities, amounts and geographic fields.',

        approach:
            'The dashboard combines Total Sales and Total Orders KPIs with order-status, state, gender, channel, country and age-group analysis. Channel and Age Group filters allow the dashboard to be explored interactively.',

        model:
            'The analytical model uses Tableau aggregations and dashboard-level dimensions to compare sales across customer, geographic, channel and order-status categories.',

        results: [
            'Total sales are 21,176,377 in the displayed dashboard.',
            'Total orders are 31,047.',
            '93.08% of orders are delivered in the displayed order-status breakdown.',
            'Men account for 7.61M in sales while women account for 13.56M.',
            'Amazon is the leading channel in the displayed channel comparison at 7.52M.',
            'The Top 5 Selling States view highlights the strongest-performing states by sales.'
        ],

        deployment:
            'The completed analysis is delivered as an interactive Tableau dashboard. The Tableau workbook is available in the GitHub repository and can be explored using Tableau Public or Tableau Desktop.',

        tools:
            'Tableau Public · Microsoft Excel · Interactive filters · Geographic visualization · Customer analytics · KPI reporting · Data visualization',

        files: 'Vrinda Store Data.twb',
        github: 'Akanimo619/Vrinda-Store-Data'
    },

    food: {
        title: 'Food & Beverage Sales Analysis',
        type: 'Tableau · Sales Analytics',

        problem:
            'The project was developed to provide a broader view of food and beverage sales performance by connecting revenue, orders, product categories, product groups, salespeople and sales channels.',

        data:
            'The analysis contains sales information that supports KPI reporting, product-group analysis, salesperson performance, product-category comparisons, sales-channel analysis and monthly revenue analysis.',

        approach:
            'The dashboard begins with overall KPIs and then breaks performance down by product groups, salespeople, product categories, channels and month. Product Category and Channel filters allow the user to investigate specific areas of the business.',

        model:
            'The Tableau workbook uses calculated and aggregated sales measures to produce KPI, ranking, category, channel and time-based views. The analysis is descriptive and focused on business performance reporting.',

        results: [
            'Total Revenue is $17.91M in the displayed dashboard.',
            'Average Transaction Price (ATP) is $340.74.',
            'Total Orders are 52,560.',
            'Wheat Flour generates the highest revenue among the product groups shown.',
            'Sales performance is compared across Food and Drink categories.',
            'Revenue is analysed across Retail, Distributor and Online channels.',
            'Salespeople are compared using both revenue and order volume.'
        ],

        deployment:
            'The completed analysis is delivered as an interactive Tableau dashboard. The original Tableau workbook and dashboard preview are available in the GitHub repository.',

        tools:
            'Tableau Public · Calculated fields · Sales analytics · KPI design · Interactive filters · Data visualization',

        files: 'Food and Beverage Analysis.twb',
        github: 'Akanimo619/Food-and-Beverage-Analysis'
    },

    crime: {
        title: 'Nigeria Crime Risk Classification',
        type: 'Python · K-Means · FastAPI',

        problem:
            'The project was developed to identify similarities in reported crime patterns across Nigeria’s 36 states and classify states according to the resulting crime-profile clusters.',

        data:
            'The main dataset contains Nigeria 2023 state-level crime statistics covering Terrorism, Banditry, Murder, Armed Robbery, Kidnapping and Other reported crimes. The project also contains the prepared clustered dataset and the original 2021 and 2023 uploaded datasets.',

        approach:
            'The selected crime features are prepared and standardised before clustering. K-Means is then used to group states according to similarities in their crime profiles. The resulting cluster assignments are incorporated into the prepared dataset and used by the web application.',

        model:
            'The machine-learning model is K-Means clustering. StandardScaler is used before clustering so that crime variables with different numerical ranges can be used together effectively. The trained model is saved as kmeans_model.pkl and the fitted scaler as scaler.pkl.',

        results: [
            'The system groups Nigerian states according to similarities in their reported crime profiles.',
            'The prepared clusters are mapped to Low, Moderate, High and Extreme risk levels within the application.',
            'The trained K-Means model and scaler are reused during inference rather than retraining for every request.',
            'The project extends the clustering model into a complete web-based classification workflow.'
        ],

        deployment:
            'The model is integrated into a FastAPI web application. The application includes authentication, database functionality, prediction workflows and user/admin features. The repository contains the trained model, scaler, application code and supporting files.',

        tools:
            'Python · Pandas · Scikit-learn · StandardScaler · K-Means · FastAPI · SQLAlchemy · Joblib',

        files: 'FastAPI-Crime-Classification-System/',
        github: 'Akanimo619/FastAPI-Crime-Classification-System'
    },

    college: {
        title: 'College Placement Prediction',
        type: 'Python · KNN · Streamlit',

        problem:
            'The project was developed to determine whether a college student is likely to be placed based on academic and personal characteristics and to turn the trained machine-learning model into an accessible application.',

        data:
            'The dataset contains 1,137 student records with fields including Age, Gender, Stream, Internships, CGPA, Hostel, HistoryOfBacklogs and PlacedOrNot.',

        approach:
            'Student information is entered through the Streamlit interface. Categorical variables are transformed using the saved encoders, after which the processed values are passed to the trained KNN classifier.',

        model:
            'The machine-learning model is a K-Nearest Neighbors (KNN) classifier. The trained model is stored in knn_college_model.pkl, while gender_encoder.pkl and stream_encoder.pkl contain the preprocessing components required for inference.',

        results: [
            'The application produces a placement prediction from the supplied student characteristics.',
            'The workflow preserves the same categorical encoding process used during model development.',
            'The saved model allows predictions to be generated without retraining the classifier.',
            'The application presents the prediction through an interactive Streamlit interface.',
            'Prediction history can be retained so previous assessments can be reviewed.'
        ],

        deployment:
            'The trained model is deployed through a Streamlit application. The repository contains the application code, trained KNN model, categorical encoders, dataset and requirements file. The application is available through its Streamlit deployment.',

        tools:
            'Python · Pandas · Scikit-learn · KNN · Joblib · Streamlit',

        files: 'College-Placement-App/',
        github: 'Akanimo619/College-Placement-App',

        demo: 'college-placement-app-gfqzyju4pengremo6nq3jx.streamlit.app/'
    }
};


const modal = document.getElementById('modal');
const content = document.getElementById('modal-content');
const closeButton = document.querySelector('.modal-close');


function createCaseStudySection(title, body) {
    return `
        <div class="case-box">
            <strong>${title}</strong>
            <p>${body}</p>
        </div>
    `;
}


function createResultsList(results) {
    return `
        <div class="case-box">
            <strong>Results</strong>
            <ul>
                ${results.map(result => `<li>${result}</li>`).join('')}
            </ul>
        </div>
    `;
}


function createGitHubLink(repo) {
    /*
     * The repository names have been verified against the public
     * repositories on the Akanimo619 GitHub profile.
     *
     * The URL is assembled here rather than hard-coded separately
     * for every project.
     */
    const githubBase = ['https:', '', 'github.com'].join('//');
    const url = `${githubBase}/${repo}`;

    return `
        <div class="case-box">
            <strong>GitHub</strong>
            <p>
                <a
                    href="${url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn secondary"
                >
                    View GitHub Repository →
                </a>
            </p>
        </div>
    `;
}


function createDeploymentContent(project) {
    let deploymentHTML = `<p>${project.deployment}</p>`;

    if (project.demo) {
        const streamlitBase = ['https:', '', 'college-placement-app-gfqzyju4pengremo6nq3jx.streamlit.app'].join('//');

        deploymentHTML += `
            <p style="margin-top:12px;">
                <a
                    href="${streamlitBase}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn primary"
                >
                    Launch Live App →
                </a>
            </p>
        `;
    }

    return deploymentHTML;
}


function openCaseStudy(projectKey) {
    const project = projects[projectKey];

    if (!project) {
        return;
    }

    content.innerHTML = `
        <p class="eyebrow">${project.type}</p>

        <h3>${project.title}</h3>

        ${createCaseStudySection('Problem', project.problem)}

        ${createCaseStudySection('Data', project.data)}

        ${createCaseStudySection('Approach', project.approach)}

        ${createCaseStudySection('Model', project.model)}

        ${createResultsList(project.results)}

        <div class="case-box">
            <strong>Deployment</strong>
            ${createDeploymentContent(project)}
        </div>

        ${createCaseStudySection('Tools', project.tools)}

        ${createGitHubLink(project.github)}

        <div class="case-box" style="margin-top:20px;">
            <strong>Project files</strong>
            <p>${project.files}</p>
        </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}


function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}


document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
        openCaseStudy(button.dataset.project);
    });
});


if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}


modal.addEventListener('click', event => {
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');


if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}


document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav) {
            nav.classList.remove('open');
        }
    });
});