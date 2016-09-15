export default function(){

  this.transition(
    this.fromRoute('index'),
    this.toRoute('bootstrap'),
    this.use('fade', { duration: 300 }),
    this.reverse('fade',  { duration: 300 })
  );

}
