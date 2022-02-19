import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"

function Projects() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    description
                    forkCount
                    id
                    name
                    openGraphImageUrl
                    updatedAt(fromNow: true)
                    url
                    primaryLanguage {
                      name
                    }
                    languages {
                      nodes {
                        name
                      }
                    }
                    readme {
                      text
                    }
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes
  console.log(repos)

  return (
    <section className="w-full shadow-lg py-10 mt-10 rounded-lg bg-gray-800 light:bg-gray-200 mb-2 p-6">
      <div>
        <ul>
          {
            repos.map(repo =>
              <li key={repo.id}>
                <a 
                  href={repo.url} 
                  target='_blank' 
                  alt='Repos' 
                  rel="noopener noreferrer"
                  target="_blank"
                  area-label="Social Link"
                >
                  <h2 className="font-bold text-2xl text-indigo-400">{repo.name}</h2>
                </a>
                <div className="ml-4">{repo.description}</div>
                <div className="ml-4">Updated Time: {repo.updatedAt}</div>
                <div className="ml-4">Code Language: {repo.primaryLanguage.name}</div>                
              </li>
            )
          }
        </ul>
      </div>
    </section>
  );
}  

export default Projects