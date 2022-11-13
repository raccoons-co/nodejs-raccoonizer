export default interface NodejsFrameworkConfiguration<T> {
  applyTo( framework: T ): void;
}