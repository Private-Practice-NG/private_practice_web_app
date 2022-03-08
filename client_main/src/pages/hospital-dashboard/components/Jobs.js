const Jobs = () => {
	return (
		<section className='dashboard-jobs'>
			<header className='dashboard-jobs-header'>
				<h2 className='open-sans dashboard-jobs-title'>Payment</h2>
				<p>Tell us about your budget</p>
			</header>

			<div className='dashboard-jobs-form-section'>
				<form className='dashboard-jobs-form'>
					<label>
						<span>&#8358;</span>
						<input type='number' placeholder='Enter Amount' />
					</label>
				</form>
				<span>Per session</span>
			</div>

			<div className='dashboard-jobs-payment'>
				<h3>Total</h3>
				<p>20,000 x 2 sessions</p>
				<p className='payment-calulations'>
					&#8358;40,000 + 2,000 (platform fee)
				</p>
				<p className='payment-total'> = N42,000 </p>
			</div>
		</section>
	)
}
export default Jobs
