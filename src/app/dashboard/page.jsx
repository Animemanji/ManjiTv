import Card from "@/app/ui/dashboard/card/card";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Transactions from "@/app/ui/dashboard/transactions/transactions"


const Dashboard = () => {


  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div  className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        </div>
    </div>
    </>
  )
}

export default Dashboard
