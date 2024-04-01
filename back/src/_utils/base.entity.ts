import { ApiProperty } from '@nestjs/swagger'

/**
 * BaseEntity
 */
export default abstract class BaseEntity {
    /**
     * CreatedAt
     * @public
     */
    @ApiProperty()
    createdAt!: Date

    /** UpdatedAt */
    @ApiProperty()
    updatedAt!: Date
}
