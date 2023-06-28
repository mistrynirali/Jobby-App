import './index.css'
import JobList from '../JobList'

const JobsLists = props => {
  const {jobsList} = props

  return (
    <ul className="jobs-list-container">
      {jobsList.map(eachJob => (
        <JobList key={eachJob.id} jobListItem={eachJob} />
      ))}
    </ul>
  )
}

export default JobsLists
