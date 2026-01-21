document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/projects.json')
        .then(response => response.json())
        .then(projectsData => {
            const projectsContainer = document.querySelector('.row');

            projectsData.forEach(p => {
                const card = `
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card bg-light text-dark h-100">
                            <div class="card-body d-flex flex-column">
                                <h3 class="card-title">${p.title}</h3>
                                <p class="card-text flex-grow-1 fst-italic">${p.description}</p>
                                <p class="card-text flex-grow-1"><strong>Stack:</strong> ${p.stack.join(', ')}</p>
                                <div>
                                    <a href="${p.github}" target="_blank" class="btn btn-info btn-sm"><i class="bi bi-code-slash"></i></a>
                                    ${p.website ? `<a href="${p.website}" target="_blank" class="btn btn-primary btn-sm"><i class="bi bi-box-arrow-up-right"></i></a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                projectsContainer.innerHTML += card;
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});