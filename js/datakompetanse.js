Vue.component('datakompetanse', {
    template: '#datakompetanse-template',
    data() {
        return {
          data: [
            {
              name: "Kunstig intelligens (AI)",
              nameEn: "Artificial Intelligence",
              comp: [
                {
                  name: "Claude Code",
                  fading: false
                },
                {
                  name: "Codex CLI",
                  fading: false
                },
                {
                  name: "GitHub Copilot CLI",
                  fading: false
                },
                {
                  name: "MCP",
                  fading: false
                },
                {
                  name: "Agent Skills",
                  fading: false
                },
                {
                  name: "The Rig",
                  fading: false
                }
              ]
            },
            {
              name: "Grafisk programvare",
              nameEn: "Graphic software",
              comp: [
                {
                  name: "Adobe Photoshop",
                  fading: true
                },
                {
                  name: "Illustrator",
                  fading: true
                },
                {
                  name: "Flash",
                  fading: true
                },
                {
                  name: "InDesign",
                  fading: true
                },
                {
                  name: "Premiere",
                  fading: true
                },
                {
                  name: "After Effects",
                  fading: true
                },
                {
                  name: "3DSMax",
                  fading: true
                }
              ]
            },
            {
              name: "Språk",
              nameEn: "Languages",
              comp: [
                {
                  name: "VB",
                  fading: true
                },
                {
                  name: "C",
                  fading: true
                },
                {
                  name: "Java",
                  fading: true
                },
                {
                  name: "C++",
                  fading: true
                },
                {
                  name: "C#",
                  fading: false
                },
                {
                  name: ".NET",
                  fading: false
                },
                {
                  name: "ASP",
                  fading: true
                },
                {
                  name: "PHP",
                  fading: true
                },
                {
                  name: "XSLT",
                  fading: true
                },
                {
                  name: "HTML",
                  fading: false
                },
                {
                  name: "HTML5",
                  fading: false
                },
                {
                  name: "CSS",
                  fading: false
                },
                {
                  name: "SQL",
                  fading: false
                },
                {
                  name: "jQuery",
                  fading: true
                },
                {
                  name: "AngularJS",
                  fading: true
                },
                {
                  name: "VueJS",
                  fading: true
                },
                {
                  name: "Less",
                  fading: true
                },
                {
                  name: "Sass",
                  fading: true
                },
                {
                  name: "Knockout",
                  fading: true
                }
              ]
            },
            {
              name: "Databaser",
              nameEn: "Databases",
              comp: [
                {
                  name: "Microsoft SQL Server",
                  fading: false
                },
                {
                  name: "MySQL",
                  fading: true
                },
                {
                  name: "Oracle",
                  fading: true
                },
                {
                  name: "Redis",
                  fading: false
                },
                {
                  name: "PostgreSQL",
                  fading: false
                },
                {
                  name: "MongoDB",
                  fading: false
                }
              ]
            },
            {
              name: "Operativsystemer",
              nameEn: "Operating Systems",
              comp: [
                {
                  name: "macOS",
                  fading: false
                },
                {
                  name: "Microsoft Windows",
                  fading: false
                },
                {
                  name: "Unix/Linux",
                  fading: false
                }
              ]
            },
            {
              name: "Mobil",
              nameEn: "Mobile",
              comp: [
                {
                  name: "iOS",
                  fading: false
                },
                {
                  name: "Swift",
                  fading: false
                }
              ]
            },
            {
              name: "Skytjenester",
              nameEn: "Cloud services",
              comp: [
                {
                  name: "Azure Kubernetes Service",
                  fading: false
                },
                {
                  name: "Azure",
                  fading: false
                },
                {
                  name: "Application Insights",
                  fading: false
                },     
                {
                  name: "Azure Automation",
                  fading: false
                },     
                {
                  name: "Azure Active Directory",
                  fading: false
                },      
                {
                  name: "Azure API Management",
                  fading: false
                },
                {
                  name: "Azure Blob Storage",
                  fading: false
                },
                {
                  name: "Azure Functions",
                  fading: false
                },
                {
                  name: "Azure Logic Apps",
                  fading: false
                },
                {
                  name: "Azure Service Bus",
                  fading: false
                },
                {
                  name: "Azure SQL Database",
                  fading: false
                },
                {
                  name: "Azure Table Storage",
                  fading: false
                },
                {
                  name: "Azure Web Apps",
                  fading: false
                },
                {
                  name: "Cloudflare",
                  fading: false
                },
                {
                  name: "Azure DevOps",
                  fading: false
                },
                {
                  name: "Azure Search",
                  fading: true
                },
                {
                  name: "AWS",
                  fading: true
                },
                {
                  name: "Azure SQL elastic pools",
                  fading: false
                },
                {
                  name: "Azure Cognitive Services",
                  fading: false
                },
                {
                  name: "Google Cloud",
                  fading: false
                }
              ]
            },
            {
              name: "DevOps/GitOps",
              nameEn: "DevOps/GitOps",
              comp: [
                {
                  name: "Kubernetes",
                  fading: false
                },
                {
                  name: "ArgoCD",
                  fading: false
                },
                {
                  name: "FluxCD",
                  fading: false
                },
                {
                  name: "Grafana",
                  fading: false
                },
                {
                  name: "Terraform",
                  fading: false
                },
                {
                  name: "OpenTofu",
                  fading: false
                },
                {
                  name: "HashiCorp Vault",
                  fading: false
                },
                {
                  name: "SOPS",
                  fading: false
                }
              ]
            },
            {
              name: "Annet",
              nameEn: "Other",
              comp: [
                {
                  name: "ASP.NET"
                },
                {
                  name: "EPiServer",
                  fading: true
                },
                {
                  name: "Git"
                },
                {
                  name: "Octopus Deploy",
                  fading: false
                },
                {
                  name: "Google Analytics"
                },
                {
                  name: "Google Webmaster Tools"
                },
                {
                  name: "SendGrid"
                },
                {
                  name: "Auth0"
                },
                {
                  name: "Microsoft Visual Studio",
                  fading: false
                },
                {
                  name: "GitHub",
                  fading: false
                },
                {
                  name: "Docker",
                  fading: false
                },
                {
                  name: "Docker Swarm",
                  fading: false
                },
                {
                  name: "RabbitMQ",
                  fading: false
                },
                {
                  name: "Jira",
                  fading: false
                },
                {
                  name: "Confluence",
                  fading: false
                },
                {
                  name: "Rider",
                  fading: false
                },
                {
                  name: "Blazor",
                  fading: false
                },
                {
                  name: "WPF",
                  fading: false
                }
              ]
            }
          ]
        };
      }
  });